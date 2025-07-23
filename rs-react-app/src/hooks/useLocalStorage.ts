import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export const STORAGE_KEY = 'abeilleee_searchTerm';

export const useLocalStorage = (
  storageKey = STORAGE_KEY,
  initialValue = ''
): [string | null, Dispatch<SetStateAction<string>>] => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(storageKey) || initialValue
  );

  useEffect(() => {
    const value = searchTerm;
    localStorage.setItem(storageKey, value);
  }, [searchTerm, storageKey]);

  return [searchTerm, setSearchTerm];
};
