import { useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';
import { getSelectedPokemons } from '@/store/selectors/pokemonSelector';

export const useIsPokemonSelected = (name: string) => {
  const selectedPokemons = useAppSelector(getSelectedPokemons);

  const isSelected = useMemo(() => {
    return selectedPokemons.some((pokemon) => pokemon.name === name);
  }, [name, selectedPokemons]);

  return isSelected;
};
