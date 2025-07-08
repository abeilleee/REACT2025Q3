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
    if (this.props.isLoading) {
      return (
        <>
          <div className={styles.container}>
            {Array.from({ length: 20 }).map((_, index) => (
              <SkeletonsCard key={index} />
            ))}
          </div>
          ;
        </>
      );
    }

    return (
      <div className={styles.container}>
        {this.props.pokemonsData.map((pokemon, index) =>
          pokemon ? <Card key={index} pokemon={pokemon} /> : null
        )}
      </div>
    );
  }
}
