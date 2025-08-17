import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { notFound } from '@/assets';
import { Link } from '@/i18n/navigation';
import { PATHS } from '@/utils/constants';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{t('notFound')}</p>
      <div className={styles['img-box']}>
        <Image src={notFound} alt="pikachu" width={540} height={256} priority />
      </div>
      <Link href={PATHS.ROOT} className="link">
        {t('back')}
      </Link>
    </div>
  );
};

export default NotFound;
