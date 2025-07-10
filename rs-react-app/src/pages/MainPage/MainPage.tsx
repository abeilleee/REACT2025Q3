import { CardsLayout } from '@/components/layouts/CardsLayout';
import { Search } from '@/components/ui/Search';
import { pokeApi } from '@/services/api/api';
import type { PokemonData } from '@/utils/pokemonDataMapper';
import { Component } from 'react';

type MainPageProps = {};

interface MainPageState {
  pokemons: (PokemonData | undefined)[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
}

export class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: true,
      error: null,
      searchTerm: '',
    };
  }

  componentDidMount() {
    //eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.loadPokemons();
  }

  private async loadPokemons() {
    this.setState({ isLoading: true, error: null });

    try {
      const pokemonList = await pokeApi.getPokemons();

      if (pokemonList) {
        const pokemonData = await Promise.all(
          pokemonList.map(async (pokemon: { name: string }) => {
            return await pokeApi.getPokemonData(pokemon.name);
          })
        );
        this.setState({ pokemons: pokemonData, isLoading: false });
      } else {
        this.setState({ pokemons: [], isLoading: false });
      }
    } catch (error) {
      console.error('Error while loading pokemons: ', error);
      if (error instanceof Error)
        this.setState({ error: error.message, isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  private handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      await this.loadPokemons();
      return;
    }

    this.setState({ isLoading: true, searchTerm: searchTerm, pokemons: [] });

    try {
      const response = await pokeApi.getPokemonData(searchTerm.trim());

      if (response) {
        this.setState({ pokemons: [response], error: null });
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
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
