'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { Button } from '@/components/ui';
import { Link } from '@/i18n/navigation';
import { PATHS } from '@/utils/constants';
import styles from './About.module.scss';

const About: FC = () => {
  const router = useRouter();
  const t = useTranslations('AboutPage');

  const onClick = () => {
    router.push(PATHS.ROOT);
  };

  const content = (
    <p className={styles.text}>
      {t('firstLine')}
      <br />
      <Link
        href="https://github.com/abeilleee"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        abeilleee
      </Link>
      <br />
      {t('secondLine')}
      <br />
      <Link
        href="https://rs.school/courses/reactjs"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        REACT2025Q3
      </Link>
      <br />
      {t('thirdLine')}
    </p>
  );

  return (
    <div className={styles.card}>
      {content}
      <Button onClick={onClick} textContent={t('button')} />
    </div>
  );
};

export default About;
