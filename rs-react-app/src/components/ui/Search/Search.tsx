'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { usePathname } from '@/i18n/navigation';
import styles from './Search.module.scss';

type SearchProps = {
  searchTerm: string;
};

export const Search: FC<SearchProps> = ({ searchTerm }) => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setCurrentValue] = useState(searchTerm);
  const t = useTranslations('Search');

  const onClick = () => {
    const newSearchTerm = value;
    const params = new URLSearchParams();
    if (newSearchTerm) {
      params.set('searchTerm', newSearchTerm);
    }
    searchParams.forEach((value, key) => {
      if (key !== 'searchTerm') {
        params.append(key, value);
      }
    });
    const newUrl = `${path}?${params.toString()}`;
    router.push(newUrl);
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
