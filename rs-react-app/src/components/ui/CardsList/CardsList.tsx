'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { ReturnData } from '@/app/api/fetchData';
import { Button, Card, ErrorState, Pagination } from '@/components';
import { INITIAL_PAGE } from '@/utils/constants';
import styles from './CardsList.module.scss';

type CardsListProps = {
  fetchData: ReturnData;
  currentPage: number;
};

export const CardsList: FC<CardsListProps> = ({ fetchData, currentPage }) => {
  const { pokemonData, total, error } = fetchData;
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('CardList');

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set('page', String(newPage));
    const newUrl = `?${params.toString()}`;
    router.push(newUrl);
  };

  if (error) {
    return <ErrorState errorMessage={error} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {pokemonData &&
          pokemonData.map((pokemonData, index) => (
            <Card key={index} pokemon={pokemonData} />
          ))}
      </div>
      {pokemonData && (
        <Pagination
          currentPage={currentPage}
          total={total ?? INITIAL_PAGE}
          handlePageChange={handlePageChange}
        />
      )}
      <Button textContent={t('refresh')} onClick={() => router.refresh()} />
    </div>
  );
};
