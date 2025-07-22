import { useEffect, useState, type FC } from 'react';
import styles from './Search.module.scss';
import { Button } from '@/components/ui';
import { storage } from '@/services';

type SearchProps = {
  onSearch: (searchTerm: string) => void;
};

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storageValue = storage.getItem();

    if (storageValue) setSearchTerm(storageValue);
  }, []);

  const onClick = () => {
    onSearch(searchTerm);
    storage.setItem(searchTerm);
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
