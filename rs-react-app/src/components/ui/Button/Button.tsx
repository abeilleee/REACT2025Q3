import { type FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  textContent: string;
};

export const Button: FC<ButtonProps> = ({ onClick, textContent }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {textContent}
    </button>
  );
};
