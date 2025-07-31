import { useMemo } from 'react';
import { useAppSelector } from '@/hooks';
import { getSelectedPokemons } from '@/store/selectors/pokemonSelector';

export const useSelectedPokemons = () => {
  const selectedPokemons = useAppSelector(getSelectedPokemons);

  const selectedPokemonsNumber = useMemo(() => {
    return selectedPokemons.length;
  }, [selectedPokemons]);

  return selectedPokemonsNumber;
};
