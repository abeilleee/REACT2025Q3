import { type FC } from 'react';
import pic from '@/assets/images/egg.png';
import { STATUS_CODE } from '@/services/api/constants';
import styles from './ErrorState.module.scss';

type ErrorStateProps = {
  errorMessage: string;
};

export const ErrorState: FC<ErrorStateProps> = ({ errorMessage }) => {
  const isNotFoundError = errorMessage?.includes(String(STATUS_CODE.NOT_FOUND));

  return (
    <>
      {isNotFoundError ? (
        <div className={styles['not-found']}>No results found</div>
      ) : (
        <div className={styles['error']}>
          <p className={styles.text}>Oops... Error: {errorMessage}</p>
          <img src={pic} alt="egg" height="170px" />
          <p className={styles.text}>Please, try again</p>
        </div>
      )}
    </>
  );
};
