'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { type FC } from 'react';
import { placeholder } from '@/assets';
import { CheckBox, Description } from '@/components';
import { useAppDispatch, useIsPokemonSelected } from '@/hooks';
import { PokemonData } from '@/store/slices/pokemon';
import {
  deselectPokemon,
  selectPokemon,
} from '@/store/slices/pokemon/pokemonSlice';
import { INITIAL_PAGE } from '@/utils/constants';
import styles from './Card.module.scss';

type CardProps = {
  pokemon: PokemonData;
};

export const Card: FC<CardProps> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  const isSelected = useIsPokemonSelected(pokemon.name);
  const searchParams = useSearchParams();
  const currentPage = searchParams?.get('page') ?? INITIAL_PAGE;

  const onSelect = () => {
    if (isSelected) {
      dispatch(deselectPokemon(pokemon));
      return;
    }
    dispatch(selectPokemon(pokemon));
  };

  return (
    <Link
      href={{
        pathname: `/pokemon/${pokemon.name}`,
        query: { page: currentPage },
      }}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.name}>{pokemon.name}</div>
          <div className={styles['content-box']}>
            <div className={styles['img-box']}>
              <Image
                src={pokemon.sprites || placeholder}
                alt={pokemon.name}
                width={120}
                height={120}
                priority
              />
            </div>
            <Description
              height={pokemon.height}
              weight={pokemon.weight}
              abilities={pokemon.abilities}
            />
          </div>
          <CheckBox onChange={onSelect} checked={isSelected} />
        </div>
      </div>
    </Link>
  );
};
