import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const t = useTranslations('Common');

  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
      <p>{t('loading')}</p>
    </div>
  );
};
