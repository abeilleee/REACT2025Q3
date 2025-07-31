import { useMemo } from 'react';
import { getSelectedPokemons } from '@/store/selectors/pokemonSelector';
import { useAppSelector } from '../reduxHooks';

export const useIsPokemonSelected = (name: string) => {
  const selectedPokemons = useAppSelector(getSelectedPokemons);

  const isSelected = useMemo(() => {
    return selectedPokemons.some((pokemon) => pokemon.name === name);
  }, [name, selectedPokemons]);

  return isSelected;
};
