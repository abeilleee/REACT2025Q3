import { type FC } from 'react';
import styles from './CardsLayout.module.scss';
import type { PokemonData } from '@/utils/types';
import pic from '@/assets/images/egg.png';
import { Card, SkeletonCard } from '@/components/ui';

type CardsLayoutProps = {
  pokemonsData?: PokemonData[];
  isLoading: boolean;
  errorMessage: string;
};

export const CardsLayout: FC<CardsLayoutProps> = ({
  pokemonsData,
  isLoading,
  errorMessage,
}) => {
  const renderLoadingState = () => {
    return (
      <div className={styles.container}>
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  };

  const renderNotFoundState = () => {
    return <div className={styles['not-found']}>No results found</div>;
  };

  const renderErrorState = () => {
    return (
      <div className={styles['error']}>
        <p>{errorMessage}</p>
        <img src={pic} alt="egg" height="120px" />
        <p>Please, try again</p>
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className={styles.container}>
        {pokemonsData &&
          pokemonsData.length > 0 &&
          pokemonsData.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
      </div>
    );
  };

  if (isLoading) {
    return renderLoadingState();
  }

  if (!pokemonsData || (pokemonsData.length === 0 && !errorMessage)) {
    return renderNotFoundState();
  }

  if (errorMessage) {
    return renderErrorState();
  }

  return renderCards();
};
