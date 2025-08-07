import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type FC } from 'react';
import pic from '@/assets/images/egg.png';
import { buildErrorMessage } from '@/utils';
import { STATUS_CODE } from '@/utils/constants';
import styles from './ErrorState.module.scss';

type ErrorStateProps = {
  errorMessage: FetchBaseQueryError | SerializedError;
};

export const ErrorState: FC<ErrorStateProps> = ({ errorMessage }) => {
  const messageToDisplay = buildErrorMessage(errorMessage);

  const isNotFoundError = messageToDisplay.includes(
    String(STATUS_CODE.NOT_FOUND)
  );

  return (
    <>
      {isNotFoundError ? (
        <div className={styles['not-found']}>No results found</div>
      ) : (
        <div className={styles['error']}>
          <p className={styles.text}>Oops... Error: {messageToDisplay}</p>
          <img src={pic} alt="egg" height="170px" />
          <p className={styles.text}>Please, try again</p>
        </div>
      )}
    </>
  );
};
