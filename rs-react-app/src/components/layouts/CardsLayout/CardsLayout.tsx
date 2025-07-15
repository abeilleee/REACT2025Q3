import { Component } from 'react';
import styles from './CardsLayout.module.scss';
import type { PokemonData } from '@/utils/pokemonDataMapper';
import pic from '@/assets/images/egg.png';
import { Card } from '@/components/ui/Card';
import { SkeletonCard } from '@/components/ui/Card/components';

type CardsLayoutProps = {
  pokemonsData?: PokemonData[];
  isLoading: boolean;
  errorMessage: string;
};

export class CardsLayout extends Component<CardsLayoutProps> {
  private renderLoadingState() {
    return (
      <div className={styles.container}>
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  private renderNotFoundState() {
    return <div className={styles['not-found']}>No results found</div>;
  }

  private renderErrorState() {
    return (
      <div className={styles['error']}>
        <p>{this.props.errorMessage}</p>
        <img src={pic} alt="egg" height="120px" />
        <p>Please, try again</p>
      </div>
    );
  }

  private renderCards() {
    return (
      <div className={styles.container}>
        {this.props.pokemonsData &&
          this.props.pokemonsData.length > 0 &&
          this.props.pokemonsData.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
      </div>
    );
  }

  render() {
    const { isLoading, pokemonsData, errorMessage } = this.props;

    if (isLoading) {
      return this.renderLoadingState();
    }

    if (!pokemonsData || (pokemonsData.length === 0 && !errorMessage)) {
      return this.renderNotFoundState();
    }

    if (errorMessage) {
      return this.renderErrorState();
    }

    return this.renderCards();
  }
}
