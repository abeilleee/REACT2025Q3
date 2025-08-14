import Image from 'next/image';
import { type FC } from 'react';
import gh from '@/assets/images/gh.svg';
import rs from '@/assets/images/rs.svg';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://rs.school/"
        target="_blank"
        className={styles.icon}
        rel="noreferrer"
      >
        <Image src={rs} alt="icon" />
      </a>
      <div>2025</div>
      <a
        href="https://github.com/abeilleee"
        target="_blank"
        className={styles.icon}
        rel="noreferrer"
      >
        <Image src={gh} alt="github" />
      </a>
    </footer>
  );
};
