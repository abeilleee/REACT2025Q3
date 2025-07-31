import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { useLocalStorage } from '@/hooks';
import { STORAGE_KEY } from '@/utils/constants';
import styles from './Search.module.scss';

type SearchProps = {
  onSearch: (searchTerm: string) => void;
};

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [storageValue, setStorageValue] = useLocalStorage({
    key: STORAGE_KEY.SEARCH_TERM,
  });

  useEffect(() => {
    if (storageValue) setSearchTerm(storageValue);
  }, [storageValue]);

  const onClick = () => {
    onSearch(searchTerm.trim());
    setSearchTerm(searchTerm.trim());
    setStorageValue(searchTerm.trim());
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClick();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <div className={styles['search-box']}>
      <input
        type="text"
        placeholder="Enter the full pokemon name"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={searchTerm}
      />
      <Button onClick={onClick} textContent="Search" />
    </div>
  );
};
