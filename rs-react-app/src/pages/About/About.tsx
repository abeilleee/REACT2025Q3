import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import styles from './About.module.scss';

const About: FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATHS.ROOT);
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
    <>
      <div className={styles.card} data-testid="about-page">
        {content}
        <Button onClick={onClick} textContent="Back to main" />
      </div>
    </>
  );
};

export default About;
