import Image from 'next/image';
import { type FC } from 'react';
import gh from '@/assets/images/gh.svg';
import rs from '@/assets/images/rs.svg';
import { Link } from '@/i18n/navigation';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://rs.school/"
        target="_blank"
        className={styles.icon}
        rel="noreferrer"
      >
        <Image src={rs} alt="icon" priority />
      </Link>
      <div>2025</div>
      <Link
        href="https://github.com/abeilleee"
        target="_blank"
        className={styles.icon}
        rel="noreferrer"
      >
        <Image src={gh} alt="github" priority />
      </Link>
    </footer>
  );
};
