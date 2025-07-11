import { Component } from 'react';
import styles from './CardsLayout.module.scss';
import type { PokemonData } from '@/utils/pokemonDataMapper';
import { Card } from '@/components/ui/Card';
import { SkeletonsCard } from '@/components/ui/Card/components';

type CardsLayoutProps = {
  pokemonsData: (PokemonData | undefined)[];
  isLoading: boolean;
};

export class CardsLayout extends Component<CardsLayoutProps> {
  constructor(props: CardsLayoutProps) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <SkeletonsCard key={index} />
          ))
        ) : this.props.pokemonsData.length === 0 ||
          this.props.pokemonsData.every((item) => item === undefined) ? (
          <div className={styles['not-found']}>No results found</div>
        ) : (
          <div className={styles.container}>
            {this.props.pokemonsData.map((pokemon, index) =>
              pokemon ? <Card key={index} pokemon={pokemon} /> : null
            )}
          </div>
        )}
      </>
    );
  }
}
