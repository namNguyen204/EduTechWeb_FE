import { useCallback, useState } from "react";

export interface UseToggleControls {
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
  setValue: (nextValue: boolean) => void;
}

export function useToggle(initialValue = false): [boolean, UseToggleControls] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((current) => !current);
  }, []);

  const setOn = useCallback(() => {
    setValue(true);
  }, []);

  const setOff = useCallback(() => {
    setValue(false);
  }, []);

  const setExplicitValue = useCallback((nextValue: boolean) => {
    setValue(nextValue);
  }, []);

  return [value, { toggle, setOn, setOff, setValue: setExplicitValue }];
}
