import { Component } from 'react';
import styles from './Card.module.scss';
import type { PokemonData } from '@/utils/types';
import { Description } from '@/components/ui';

type CardProps = {
  pokemon: PokemonData;
};

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.name}>{this.props.pokemon.name}</div>
          <div className={styles['img-box']}>
            <img
              src={this.props.pokemon.sprites?.homefrontDefault}
              alt={this.props.pokemon.name}
            />
          </div>

          <Description
            height={this.props.pokemon.height}
            weight={this.props.pokemon.weight}
            abilities={this.props.pokemon.abilities}
          />
        </div>
      </div>
    );
  }
}
