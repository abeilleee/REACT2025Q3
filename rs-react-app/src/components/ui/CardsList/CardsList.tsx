import { type FC } from 'react';
import { Card, ErrorState, Pagination, SkeletonCard } from '@/components/ui';
import { LIMIT } from '@/services/api/constants';
import type { PokemonData } from '@/utils/types';
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
  const renderLoadingState = () => {
    return (
      <div className={styles.container}>
        {Array.from({ length: LIMIT }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  };

  const renderCards = () => {
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
          ></Pagination>
        )}
      </div>
    );
  };

  if (isLoading) {
    return renderLoadingState();
  }

  if (errorMessage) {
    return <ErrorState errorMessage={errorMessage} />;
  }

  return renderCards();
};
