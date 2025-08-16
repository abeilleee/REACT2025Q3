'use client';

import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import { Button } from '@/components/ui';
import styles from './Search.module.scss';

type SearchProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const [value, setCurrentValue] = useState(searchTerm);
  const t = useTranslations('Search');

  const onClick = () => {
    setSearchTerm(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClick();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrentValue(value);
  };

  return (
    <div className={styles['search-box']}>
      <input
        type="text"
        placeholder={t('placeholder')}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
      />
      <Button onClick={onClick} textContent={t('search')} />
    </div>
  );
};
