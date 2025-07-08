import { Component } from 'react';
import styles from './Description.module.scss';

type DescriptionProps = {
  weight: number;
  height: number;
  abilities: string[];
};

export class Description extends Component<DescriptionProps> {
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.title}> Weight: {this.props.weight}</div>
        <div className={styles.title}>Height: {this.props.height}</div>
        <div className={styles.title}>
          Abilities:
          {this.props.abilities.map((ability, index) => (
            <div key={index} className={styles.ability}>
              {ability}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
