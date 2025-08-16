import { type SerializedError } from '@reduxjs/toolkit';
import { type FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { egg } from '@/assets';
import { buildErrorMessage } from '@/utils';
import styles from './ErrorState.module.scss';

type ErrorStateProps = {
  errorMessage: FetchBaseQueryError | SerializedError;
};

export const ErrorState: FC<ErrorStateProps> = ({ errorMessage }) => {
  const t = useTranslations('ErrorState');
  const messageToDisplay = buildErrorMessage(errorMessage);
  const isNotFoundError = /Not found|404/i.test(messageToDisplay);

  return (
    <>
      {isNotFoundError ? (
        <div className={styles['not-found']}>{t('noResults')}</div>
      ) : (
        <div className={styles['error']}>
          <p className={styles.text}>Oops...{`"${messageToDisplay}"`}</p>
          <Image src={egg} alt="egg" height={170} priority />
          <p className={styles.text}>{t('msg')}</p>
        </div>
      )}
    </>
  );
};
