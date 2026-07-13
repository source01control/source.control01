export const WHITE_RABBIT_ENTER_KEY = "sc-wr-enter-fade";
export const WHITE_RABBIT_VEIL_ID = "sc-wr-veil";
export const WHITE_RABBIT_FADE_MS = 1200;
export const WHITE_RABBIT_ENTER_QUERY = "enter";

/** Survives React Strict Mode remount within the same navigation. */
let enterIntentActive = false;

export function markWhiteRabbitEnterFade(): void {
  enterIntentActive = true;
  try {
    sessionStorage.setItem(WHITE_RABBIT_ENTER_KEY, "1");
  } catch {
    // ignore
  }
}

export function hasWhiteRabbitEnterIntent(): boolean {
  if (enterIntentActive) return true;
  try {
    return sessionStorage.getItem(WHITE_RABBIT_ENTER_KEY) === "1";
  } catch {
    return false;
  }
}

export function clearWhiteRabbitEnterIntent(): void {
  enterIntentActive = false;
  try {
    sessionStorage.removeItem(WHITE_RABBIT_ENTER_KEY);
  } catch {
    // ignore
  }
}

/** @deprecated use hasWhiteRabbitEnterIntent + clearWhiteRabbitEnterIntent */
export function consumeWhiteRabbitEnterFade(): boolean {
  const value = hasWhiteRabbitEnterIntent();
  if (value) clearWhiteRabbitEnterIntent();
  return value;
}

export function ensureWhiteRabbitVeil(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  let veil = document.getElementById(WHITE_RABBIT_VEIL_ID);
  if (!veil) {
    veil = document.createElement("div");
    veil.id = WHITE_RABBIT_VEIL_ID;
    veil.className = "white-rabbit-veil";
    veil.setAttribute("aria-hidden", "true");
    document.body.appendChild(veil);
  }
  return veil;
}

export function fadeOutWhiteRabbitVeil(
  durationMs = WHITE_RABBIT_FADE_MS
): Promise<void> {
  return new Promise((resolve) => {
    const veil = document.getElementById(WHITE_RABBIT_VEIL_ID);
    if (!veil) {
      resolve();
      return;
    }

    veil.classList.add("white-rabbit-veil--out");
    window.setTimeout(() => {
      veil.remove();
      resolve();
    }, durationMs);
  });
}

export function removeWhiteRabbitVeil(): void {
  document.getElementById(WHITE_RABBIT_VEIL_ID)?.remove();
}
