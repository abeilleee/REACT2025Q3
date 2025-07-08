// import { Card } from '@/components/ui/Card';
import { CardsLayout } from '@/components/layouts/CardsLayout';
import { Search } from '@/components/ui/Search';
import { pokeApi } from '@/services/api/api';
import type { PokemonData } from '@/utils/pokemonDataMapper';
import { Component } from 'react';

interface MainPageProps {}

interface MainPageState {
  pokemons: (PokemonData | undefined)[];
  isLoading: boolean;
  error: string | null;
  searchParams: string;
}

export class MainPage extends Component<MainPageProps, MainPageState> {
  constructor(props: MainPageProps) {
    super(props);

    this.state = {
      pokemons: [],
      searchParams: '',
      isLoading: true,
      error: null,
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

  render() {
    const { pokemons, isLoading } = this.state;

    return (
      <>
        <Search />
        <CardsLayout
          pokemonsData={pokemons}
          isLoading={isLoading}
        ></CardsLayout>
      </>
    );
  }
}
