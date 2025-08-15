import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type FC } from 'react';
import {
  Card,
  ErrorState,
  Pagination,
  SkeletonCard,
  SkeletonPagination,
} from '@/components';
import { PokemonData, useGetPokemonCountQuery } from '@/store/slices/pokemon';
import { cloneComponent } from '@/utils';
import { INITIAL_PAGE, LIMIT } from '@/utils/constants';
import styles from './CardsList.module.scss';

type CardsListProps = {
  pokemonsData: PokemonData[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

export const CardsList: FC<CardsListProps> = ({
  pokemonsData,
  isLoading,
  error,
  currentPage,
  handlePageChange,
}) => {
  const { data: total } = useGetPokemonCountQuery();

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {cloneComponent({ element: <SkeletonCard />, count: LIMIT })}
        </div>
        <SkeletonPagination />
      </div>
    );
  }

  if (error) {
    return <ErrorState errorMessage={error} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {pokemonsData &&
          pokemonsData.map((pokemonsData, index) => (
            <Card key={index} pokemon={pokemonsData} />
          ))}
      </div>
      {pokemonsData && pokemonsData?.length > 1 && (
        <Pagination
          currentPage={currentPage}
          total={total || INITIAL_PAGE}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};
