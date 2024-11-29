import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const hendler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(hendler);
    };
  }, [value, delay]);

  return debounceValue;
}
