import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { type FC } from 'react';
import { egg } from '@/assets/images';
import { buildErrorMessage } from '@/utils';
import styles from './ErrorState.module.scss';

type ErrorStateProps = {
  errorMessage: FetchBaseQueryError | SerializedError;
};

export const ErrorState: FC<ErrorStateProps> = ({ errorMessage }) => {
  const messageToDisplay = buildErrorMessage(errorMessage);
  const isNotFoundError = /Not found|404/i.test(messageToDisplay);

  return (
    <>
      {isNotFoundError ? (
        <div className={styles['not-found']}>No results found</div>
      ) : (
        <div className={styles['error']}>
          <p className={styles.text}>Oops... {messageToDisplay}</p>
          <img src={egg} alt="egg" height="170px" />
          <p className={styles.text}>Please, try again</p>
        </div>
      )}
    </>
  );
};
