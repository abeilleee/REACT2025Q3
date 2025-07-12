import { Component } from 'react';
import img from '@/assets/images/pikachu.png';
import { Button } from '@/components/ui/Button';
import styles from './Fallback.module.scss';

export class Fallback extends Component {
  onClick = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.title}>Oops! It seems there was an error...</p>
        <img src={img} alt="pikachu" />
        <p className={styles.text}>Try to reload the page</p>
        <Button onClick={this.onClick} textContent="Reload"></Button>
      </div>
    );
  }
}
