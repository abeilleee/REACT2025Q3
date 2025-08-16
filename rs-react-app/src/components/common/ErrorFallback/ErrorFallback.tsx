import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { pikachu } from '@/assets';
import { Button } from '@/components/ui';
import styles from './ErrorFallback.module.scss';

export const ErrorFallback: FC = () => {
  const t = useTranslations('ErrorFallback');

  const onClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('title')}</p>
      <Image src={pikachu} alt="pikachu" height={256} priority />
      <p className={styles.text}>{t('paragraph')}</p>
      <Button onClick={onClick} textContent={t('reload')} />
    </div>
  );
};
