import { type FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { placeholder } from '@/assets/images';
import { CheckBox, Description } from '@/components';
import { useAppDispatch, useIsPokemonSelected } from '@/hooks';
import { PATHS } from '@/services/router/constants';
import { deselectPokemon, selectPokemon } from '@/store';
import type { PokemonData } from '@/store/slices/api/types';
import { getCurrentPage } from '@/utils';
import styles from './Card.module.scss';

type CardProps = {
  pokemon: PokemonData;
};

export const Card: FC<CardProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSelected = useIsPokemonSelected(pokemon.name);
  const [searchParams] = useSearchParams();

  const onClick = () => {
    const currentPage = getCurrentPage(searchParams);
    const url = `${PATHS.DETAILS.replace(':name', pokemon.name)}`;
    navigate(`${url}?page=${currentPage}`);
  };

  const onSelect = () => {
    if (isSelected) {
      dispatch(deselectPokemon(pokemon));
      return;
    }
    dispatch(selectPokemon(pokemon));
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.name}>{pokemon.name}</div>
        <div className={styles['content-box']}>
          <div className={styles['img-box']}>
            <img src={pokemon.sprites || placeholder} alt={pokemon.name} />
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
  );
};
