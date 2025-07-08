import { Component } from 'react';
import styles from './Button.module.scss';

export class Button extends Component {
  render() {
    return <button className={styles.button}>Search</button>;
  }
}
