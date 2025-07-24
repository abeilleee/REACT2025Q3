import { type FC } from 'react';
import pic from '@/assets/images/egg.png';
import { Card, SkeletonCard } from '@/components/ui';
import { STATUS_CODE } from '@/services/api/constants';
import type { PokemonData } from '@/utils/types';
import styles from './CardsLayout.module.scss';

type CardsLayoutProps = {
  pokemonsData: PokemonData[] | null;
  isLoading: boolean;
  errorMessage: string | null;
};

export const CardsLayout: FC<CardsLayoutProps> = ({
  pokemonsData,
  isLoading,
  errorMessage,
}) => {
  const isNotFoundError = errorMessage?.includes(String(STATUS_CODE.NOT_FOUND));

  const renderLoadingState = () => {
    return (
      <div className={styles.box}>
        <div className={styles.container}>
          {Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  };

  const renderErrorState = () => {
    return (
      <>
        {isNotFoundError ? (
          <div className={styles['not-found']}>No results found</div>
        ) : (
          <div className={styles['error']}>
            <p className={styles.text}>Oops... Error: {errorMessage}</p>
            <img src={pic} alt="egg" height="170px" />
            <p className={styles.text}>Please, try again</p>
          </div>
        )}
      </>
    );
  };

  const renderCards = () => {
    return (
      <div className={styles.box}>
        <div className={styles.container}>
          {pokemonsData &&
            pokemonsData.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return renderLoadingState();
  }

  if (errorMessage) {
    return renderErrorState();
  }

  return renderCards();
};
