import { Component } from 'react';
import styles from './Footer.module.scss';
import rs from '@/assets/images/rs.svg';
import gh from '@/assets/images/gh.svg';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a
          href="https://rs.school/"
          target="_blank"
          className={styles.icon}
          rel="noreferrer"
        >
          <img src={rs} alt="icon" />
        </a>
        <div>2025</div>
        <a
          href="https://github.com/abeilleee"
          target="_blank"
          className={styles.icon}
          rel="noreferrer"
        >
          <img src={gh} alt="github" />
        </a>
      </footer>
    );
  }
}
