'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { EN, DE } from '@/assets';
import { LANGUAGE } from '@/utils/constants';
import styles from './LangSwitcher.module.scss';

export const LangSwitcher: FC = () => {
  const path = usePathname();
  const router = useRouter();
  const currentLanguage = path.startsWith(`/${LANGUAGE.EN}`)
    ? LANGUAGE.EN
    : LANGUAGE.DE;
  const [language, setLanguage] = useState(currentLanguage);
  const icon = currentLanguage === LANGUAGE.EN ? DE : EN;

  const switchLang = () => {
    const newLanguage = language === LANGUAGE.DE ? LANGUAGE.EN : LANGUAGE.DE;
    const newUrl = `/${newLanguage}/${path.substring(3)}`;
    router.replace(newUrl);
    setLanguage(newLanguage);
  };

  return (
    <div className={styles.switcher} onClick={switchLang}>
      <Image src={icon} alt="language" width={35} height={35} priority />
    </div>
  );
};
