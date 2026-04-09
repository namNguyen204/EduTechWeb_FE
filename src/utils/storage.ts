type StorageArea = "local" | "session";

function getStorage(area: StorageArea): Storage | null {
  if (typeof window === "undefined") {
    return null;
  }

  return area === "local" ? window.localStorage : window.sessionStorage;
}

export function setStorageItem<T>(
  key: string,
  value: T,
  area: StorageArea = "local",
): void {
  const storage = getStorage(area);
  if (!storage) {
    return;
  }

  storage.setItem(key, JSON.stringify(value));
}

export function getStorageItem<T>(
  key: string,
  fallbackValue: T,
  area: StorageArea = "local",
): T {
  const storage = getStorage(area);
  if (!storage) {
    return fallbackValue;
  }

  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function removeStorageItem(key: string, area: StorageArea = "local"): void {
  const storage = getStorage(area);
  storage?.removeItem(key);
}
