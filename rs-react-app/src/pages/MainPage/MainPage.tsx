import { useEffect, useState, type FC } from 'react';
import { CardsLayout, Search } from '@/components';
import { pokeApi, storage } from '@/services';
import type { PokemonData } from '@/utils/types';

export const MainPage: FC = () => {
  const [data, setData] = useState<PokemonData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const value = storage.getItem();

    if (value) {
      handleSearch(value);
    } else {
      loadPokemons();
    }
  }, [searchTerm]);

  const loadPokemons = async () => {
    setIsLoading(true);
    setError('');

    try {
      const pokemonList = await pokeApi.getPokemons();

      if (pokemonList) {
        const pokemonData = await Promise.all(
          pokemonList.map(async (pokemon: { name: string }) => {
            return await pokeApi.getPokemonData(pokemon.name);
          })
        );
        if (pokemonData.every((item) => item !== undefined))
          setData(pokemonData);
      }
    } catch (error) {
      setError(String(error));
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm) {
      await loadPokemons();
      return;
    }
    setIsLoading(true);
    setError('');
    setSearchTerm(searchTerm);
    setData([]);

    try {
      const response = await pokeApi.getPokemonData(searchTerm.trim());
      if (response) {
        setData([response]);
      }
    } catch (error) {
      setError(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <CardsLayout
        pokemonsData={data}
        isLoading={isLoading}
        errorMessage={error}
      ></CardsLayout>
    </>
  );
};
