import styles from './CheckBox.module.scss';
import type { FC } from 'react';

type CheckBoxProps = {
  onChange: () => void;
  checked: boolean;
};

export const CheckBox: FC<CheckBoxProps> = ({ onChange, checked }) => {
  const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      <input
        className={styles.checkbox}
        type="checkbox"
        onClick={(e) => onClick(e)}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
};
