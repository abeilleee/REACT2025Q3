import { type RootState } from '@/store/store';

export const getSelectedPokemons = (state: RootState) => {
  return state.pokemons.selectedPokemons;
};
