'use client';

import { useRouter } from 'next/navigation';
import { type FC } from 'react';
import { Button } from '@/components/ui';
import styles from './About.module.scss';

const About: FC = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  const content = (
    <p className={styles.text}>
      The application was made by
      <br />
      <a
        href="https://github.com/abeilleee"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        abeilleee
      </a>
      <br />
      as part of the
      <br />
      <a
        href="https://rs.school/courses/reactjs"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        REACT2025Q3
      </a>
      <br />
      course
    </p>
  );

  return (
    <div className={styles.card}>
      {content}
      <Button onClick={onClick} textContent="Back to main" />
    </div>
  );
};

export default About;
