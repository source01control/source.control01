"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getWaveformPeaks } from "@/lib/audio-waveform-peaks";
import { cn } from "@/lib/utils";

const MATRIX_CHARS = "01アイウエオカキクケコサシスセソツテトナニ0123456789";

const RAIN_PALETTES = {
  matrix: {
    head: "rgba(93, 255, 58, 0.55)",
    mid: "rgba(93, 255, 58, 0.18)",
    tail: "rgba(93, 255, 58, 0.08)",
  },
  mono: {
    head: "rgba(255, 255, 255, 0.55)",
    mid: "rgba(255, 255, 255, 0.28)",
    tail: "rgba(255, 255, 255, 0.08)",
  },
} as const;

export type MatrixRainVariant = keyof typeof RAIN_PALETTES;

type RainColumn = {
  x: number;
  y: number;
  speed: number;
  chars: string[];
};

type StoreMatrixWaveformProps = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  previewSrc: string;
  rainVariant?: MatrixRainVariant;
  className?: string;
};

function randomChar(): string {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)] ?? "0";
}

function getRainPalette(
  rainVariant: MatrixRainVariant,
  columnIndex: number,
  charIndex: number,
  tick: number
) {
  if (rainVariant !== "matrix") {
    return RAIN_PALETTES[rainVariant];
  }

  const flicker =
    Math.sin(tick * 0.09 + columnIndex * 0.8 + charIndex * 0.35) +
    Math.sin(tick * 0.21 + columnIndex * 1.6);

  return flicker > 0.05 ? RAIN_PALETTES.matrix : RAIN_PALETTES.mono;
}

function drawWaveformPath(
  ctx: CanvasRenderingContext2D,
  peaks: Float32Array,
  width: number,
  height: number
) {
  const centerY = height / 2;
  const maxAmplitude = height * 0.44;
  const step = peaks.length > 1 ? width / (peaks.length - 1) : width;

  ctx.beginPath();
  ctx.moveTo(0, centerY);

  for (let index = 0; index < peaks.length; index += 1) {
    const x = index * step;
    const y = centerY - peaks[index] * maxAmplitude;
    ctx.lineTo(x, y);
  }

  for (let index = peaks.length - 1; index >= 0; index -= 1) {
    const x = index * step;
    const y = centerY + peaks[index] * maxAmplitude;
    ctx.lineTo(x, y);
  }

  ctx.closePath();
}

export function StoreMatrixWaveform({
  audioRef,
  previewSrc,
  rainVariant = "matrix",
  className,
}: StoreMatrixWaveformProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rainRef = useRef<RainColumn[]>([]);
  const peaksRef = useRef<Float32Array | null>(null);
  const rafRef = useRef<number>(0);
  const tickRef = useRef(0);
  const scrubbingRef = useRef(false);
  const [peaksReady, setPeaksReady] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);

  const seekFromClientX = useCallback(
    (clientX: number) => {
      const wrapper = wrapperRef.current;
      const audio = audioRef.current;
      if (!wrapper || !audio) return;

      const rect = wrapper.getBoundingClientRect();
      if (rect.width <= 0) return;

      const duration = audio.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;

      const progress = Math.min(
        1,
        Math.max(0, (clientX - rect.left) / rect.width)
      );
      audio.currentTime = progress * duration;
    },
    [audioRef]
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    scrubbingRef.current = true;
    setIsScrubbing(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    seekFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbingRef.current) return;
    seekFromClientX(event.clientX);
  };

  const endScrub = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!scrubbingRef.current) return;
    scrubbingRef.current = false;
    setIsScrubbing(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    let cancelled = false;
    peaksRef.current = null;
    setPeaksReady(false);

    getWaveformPeaks(previewSrc)
      .then((peaks) => {
        if (cancelled) return;
        peaksRef.current = peaks;
        setPeaksReady(true);
      })
      .catch(() => {
        if (!cancelled) setPeaksReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, [previewSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const wrapper = canvas.parentElement;
    if (!wrapper) return;

    const initRain = (width: number, height: number) => {
      const colWidth = 10;
      const columns = Math.max(8, Math.ceil(width / colWidth));
      rainRef.current = Array.from({ length: columns }, (_, index) => ({
        x: index * colWidth,
        y: Math.random() * height,
        speed: 0.7 + Math.random() * 1.2,
        chars: Array.from({ length: 14 }, randomChar),
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      if (width <= 0 || height <= 0) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initRain(width, height);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(wrapper);

    const draw = () => {
      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;

      if (width <= 0 || height <= 0) {
        rafRef.current = window.requestAnimationFrame(draw);
        return;
      }

      const audio = audioRef.current;
      const duration = audio?.duration;
      const progress =
        audio && duration && Number.isFinite(duration) && duration > 0
          ? Math.min(1, Math.max(0, audio.currentTime / duration))
          : 0;

      ctx.clearRect(0, 0, width, height);

      const fontSize = 9;
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      const tick = tickRef.current;

      rainRef.current.forEach((column, columnIndex) => {
        for (let index = 0; index < column.chars.length; index += 1) {
          const charY = column.y - index * fontSize;
          if (charY < -fontSize || charY > height + fontSize) continue;

          const rainPalette = getRainPalette(rainVariant, columnIndex, index, tick);

          if (index === 0) {
            ctx.fillStyle = rainPalette.head;
          } else if (index < 3) {
            ctx.fillStyle = rainPalette.mid;
          } else {
            ctx.fillStyle = rainPalette.tail;
          }

          ctx.fillText(column.chars[index] ?? "0", column.x + 1, charY);
        }

        column.y += column.speed * 0.75;
        if (column.y - column.chars.length * fontSize > height) {
          column.y = -Math.random() * height * 0.4;
          column.chars = column.chars.map(randomChar);
        }
      });

      tickRef.current += 1;

      const peaks = peaksRef.current;
      if (peaks && peaksReady) {
        drawWaveformPath(ctx, peaks, width, height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fill();

        if (progress > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(0, 0, width * progress, height);
          ctx.clip();
          drawWaveformPath(ctx, peaks, width, height);
          ctx.fillStyle = "rgba(255, 255, 255, 0.38)";
          ctx.fill();
          ctx.restore();

          const playheadX = width * progress;
          ctx.strokeStyle = "rgba(255, 255, 255, 0.55)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(playheadX, 0);
          ctx.lineTo(playheadX, height);
          ctx.stroke();
        }
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [audioRef, peaksReady, rainVariant]);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "store-matrix-waveform-wrap store-matrix-waveform-wrap--active",
        rainVariant === "mono" && "store-matrix-waveform-wrap--mono",
        isScrubbing && "store-matrix-waveform-wrap--scrubbing",
        className
      )}
      role="slider"
      aria-label="Seek preview"
      aria-valuemin={0}
      aria-valuemax={100}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endScrub}
      onPointerCancel={endScrub}
    >
      <canvas ref={canvasRef} className="store-matrix-waveform" aria-hidden="true" />
    </div>
  );
}
