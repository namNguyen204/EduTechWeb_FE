import { useEffect, useState } from "react";

function readStorageValue<T>(key: string, fallbackValue: T): T {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  try {
    const item = localStorage.getItem(key);
    if (!item) {
      return fallbackValue;
    }

    return JSON.parse(item) as T;
  } catch {
    return fallbackValue;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => readStorageValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore localStorage write errors
    }
  }, [key, value]);

  return [value, setValue];
}
