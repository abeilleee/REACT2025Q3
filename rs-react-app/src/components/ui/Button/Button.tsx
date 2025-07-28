import { type FC } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  textContent: string;
  className?: string;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  onClick,
  textContent,
  className,
  disabled = false,
}) => {
  const stylesName = className
    ? `${className} ${styles.button} }`
    : styles.button;

  const handleClick = () => {
    onClick();
  };

  return (
    <button className={stylesName} onClick={handleClick} disabled={disabled}>
      {textContent}
    </button>
  );
};
