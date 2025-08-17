'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import { STORAGE_PREFIX } from '@/utils/constants';

type UseLocalStorageProps = {
  key: string;
  initialValue?: string;
};

type UseLocalStorageResult = [string, Dispatch<SetStateAction<string>>];

export const useLocalStorage = ({
  key,
  initialValue = '',
}: UseLocalStorageProps): UseLocalStorageResult => {
  const storageKey = `${STORAGE_PREFIX}__${key}`;
  const [storedValue, setStoredValue] = useState(
    typeof window === 'undefined'
      ? initialValue
      : localStorage.getItem(storageKey) || initialValue
  );

  useEffect(() => {
    const value = storedValue;
    localStorage.setItem(storageKey, value);
  }, [storedValue, storageKey]);

  return [storedValue, setStoredValue];
};
