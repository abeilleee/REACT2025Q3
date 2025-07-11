import { CardsLayout } from '@/components/layouts/CardsLayout';
import { Search } from '@/components/ui/Search';
import { pokeApi } from '@/services/api/api';
import { storage } from '@/services/localStorage/localStorage';
import type { PokemonData } from '@/utils/pokemonDataMapper';
import { Component } from 'react';

type MainPageProps = {};

interface MainPageState {
  pokemons: (PokemonData | undefined)[];
  isLoading: boolean;
  searchTerm: string;
}

export class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: true,
      searchTerm: '',
    };
  }

  componentDidMount = async () => {
    const value = storage.getItem();

    if (value) {
      await this.handleSearch(value);
    } else {
      await this.loadPokemons();
    }
  };

  private async loadPokemons() {
    this.setState({ isLoading: true });

    const pokemonList = await pokeApi.getPokemons();

    if (pokemonList) {
      const pokemonData = await Promise.all(
        pokemonList.map(async (pokemon: { name: string }) => {
          return await pokeApi.getPokemonData(pokemon.name);
        })
      );
      this.setState({ pokemons: pokemonData, isLoading: false });
    }

    this.setState({ isLoading: false });
  }

  private handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      await this.loadPokemons();
      return;
    }

    this.setState({ isLoading: true, searchTerm: searchTerm, pokemons: [] });
    const response = await pokeApi.getPokemonData(searchTerm.trim());
    this.setState({ pokemons: [response], isLoading: false });
  };

  render() {
    const { pokemons, isLoading } = this.state;

    return (
      <>
        <Search onSearch={this.handleSearch} />
        <CardsLayout
          pokemonsData={pokemons}
          isLoading={isLoading}
        ></CardsLayout>
      </>
    );
  }
}
