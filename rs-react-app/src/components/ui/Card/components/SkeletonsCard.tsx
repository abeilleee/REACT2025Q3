import { Component } from 'react';
import styles from './SkeletonsCard.module.scss';

export class SkeletonsCard extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={`${styles.pulsate} ${styles.text}`}></div>
        <div className={`${styles.pulsate} ${styles.image}`}></div>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className={`${styles.pulsate} ${styles.text}`}></div>
        ))}
      </div>
    );
  }
}
