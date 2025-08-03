import { type FC } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { placeholder } from '@/assets/images';
import { Description } from '@/components/ui';
import { useAppDispatch, useIsPokemonSelected } from '@/hooks';
import { PATHS } from '@/services/router/constants';
import { deselectPokemon, selectPokemon } from '@/store/slices/pokemonSlice';
import type { PokemonData } from '@/utils/types';
import styles from './Card.module.scss';
import { CheckBox } from './components';

type CardProps = {
  pokemon: PokemonData;
};

export const Card: FC<CardProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSelected = useIsPokemonSelected(pokemon.name);
  const [searchParams] = useSearchParams();

  const onClick = () => {
    const currentPage = searchParams.get('page') || '1';
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
            <img
              src={pokemon.sprites?.homefrontDefault || placeholder}
              alt={pokemon.name}
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
  );
};
