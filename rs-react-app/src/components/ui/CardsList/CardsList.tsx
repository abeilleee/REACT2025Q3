import { type FC } from 'react';
import {
  Card,
  ErrorState,
  Pagination,
  SkeletonCard,
  SkeletonPagination,
} from '@/components';
import { LIMIT } from '@/services/api/constants';
import { cloneComponent, type PokemonData } from '@/utils';
import styles from './CardsList.module.scss';

type CardsListProps = {
  pokemonsData: PokemonData[] | null;
  isLoading: boolean;
  errorMessage: string | null;
  currentPage: number;
  handlePageChange: (page: number) => void;
  total: number;
};

export const CardsList: FC<CardsListProps> = ({
  pokemonsData,
  isLoading,
  errorMessage,
  currentPage,
  handlePageChange,
  total,
}) => {
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

  if (errorMessage) {
    return <ErrorState errorMessage={errorMessage} />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {pokemonsData &&
          pokemonsData.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
      </div>
      {pokemonsData && pokemonsData?.length > 1 && (
        <Pagination
          currentPage={currentPage}
          total={total}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};
