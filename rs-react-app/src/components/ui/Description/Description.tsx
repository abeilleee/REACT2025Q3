import { type FC } from 'react';
import styles from './Description.module.scss';

type DescriptionProps = {
  weight: number;
  height: number;
  abilities: string[];
};

export const Description: FC<DescriptionProps> = ({
  weight,
  height,
  abilities,
}) => {
  return (
    <div className={styles.box}>
      <div className={styles.title}> Weight: {weight}</div>
      <div className={styles.title}>Height: {height}</div>
      <div className={styles.title}>
        Abilities:
        {abilities.map((ability, index) => (
          <div key={index} className={styles.ability}>
            {ability}
          </div>
        ))}
      </div>
    </div>
  );
};
