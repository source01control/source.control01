const peakCache = new Map<string, Float32Array>();

export async function getWaveformPeaks(
  src: string,
  samples = 420
): Promise<Float32Array> {
  const cached = peakCache.get(src);
  if (cached) return cached;

  const response = await fetch(src);
  if (!response.ok) {
    throw new Error(`Failed to load audio: ${src}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const audioContext = new AudioContext();

  try {
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const channel = audioBuffer.getChannelData(0);
    const blockSize = Math.max(1, Math.floor(channel.length / samples));
    const peaks = new Float32Array(samples);

    for (let index = 0; index < samples; index += 1) {
      const start = index * blockSize;
      let peak = 0;

      for (let offset = 0; offset < blockSize; offset += 1) {
        const value = Math.abs(channel[start + offset] ?? 0);
        if (value > peak) peak = value;
      }

      peaks[index] = peak;
    }

    let maxPeak = 0;
    for (const value of peaks) {
      if (value > maxPeak) maxPeak = value;
    }

    if (maxPeak > 0) {
      for (let index = 0; index < peaks.length; index += 1) {
        peaks[index] = peaks[index] / maxPeak;
      }
    }

    peakCache.set(src, peaks);
    return peaks;
  } finally {
    await audioContext.close();
  }
}
