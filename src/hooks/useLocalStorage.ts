import { SetStateAction, useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

    setValue(parsedValue);
  }, [key, initialValue]);

  const setStoredValue = (newValue: SetStateAction<T>) => {
    setValue(newValue);

    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [value, setStoredValue] as const;
};
