import { type FC } from 'react';
import { Description } from '@/components/ui';
import type { PokemonData } from '@/utils/types';
import styles from './Card.module.scss';

type CardProps = {
  pokemon: PokemonData;
};

export const Card: FC<CardProps> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.name}>{pokemon.name}</div>
        <div className={styles['img-box']}>
          <img src={pokemon.sprites?.homefrontDefault} alt={pokemon.name} />
        </div>

        <Description
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
      </div>
    </div>
  );
};
