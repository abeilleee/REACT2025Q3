import { Component } from 'react';
import type { PokemonData } from '@/utils/types';
import { CardsLayout, Search } from '@/components';
import { pokeApi, storage } from '@/services';

interface MainPageState {
  pokemons?: PokemonData[];
  isLoading: boolean;
  searchTerm: string;
  errorMessage: string;
}

export class MainPage extends Component {
  state: MainPageState = {
    pokemons: [],
    isLoading: true,
    searchTerm: '',
    errorMessage: '',
  };

  componentDidMount = async () => {
    const value = storage.getItem();

    if (value) {
      await this.handleSearch(value);
    } else {
      await this.loadPokemons();
    }
  };

  private async loadPokemons() {
    this.setState({ isLoading: true, pokemons: [], errorMessage: '' });

    try {
      const pokemonList = await pokeApi.getPokemons();

      if (pokemonList) {
        const pokemonData = await Promise.all(
          pokemonList.map(async (pokemon: { name: string }) => {
            return await pokeApi.getPokemonData(pokemon.name);
          })
        );
        this.setState({ pokemons: pokemonData });
      }
    } catch (error) {
      this.setState({
        errorMessage: String(error),
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  private handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      await this.loadPokemons();
      return;
    }

    this.setState({
      isLoading: true,
      searchTerm: searchTerm,
      pokemons: [],
      errorMessage: '',
    });

    try {
      const response = await pokeApi.getPokemonData(searchTerm.trim());
      if (response) {
        this.setState({ pokemons: [response] });
      }
    } catch (error) {
      this.setState({
        errorMessage: String(error),
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { pokemons, isLoading, errorMessage } = this.state;

    return (
      <>
        <Search onSearch={this.handleSearch} />
        <CardsLayout
          pokemonsData={pokemons}
          isLoading={isLoading}
          errorMessage={errorMessage}
        ></CardsLayout>
      </>
    );
  }
}
