'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSelectedPokemons } from '@/store/selectors/pokemonSelector';
import { deselectAllPokemons } from '@/store/slices/pokemon';
import { downloadFile } from '@/utils/downloadFile';
import styles from './FlyoutPanel.module.scss';

export const FlyoutPanel: FC = () => {
  const selectedPokemons = useAppSelector(getSelectedPokemons);
  const dispatch = useAppDispatch();
  const selectedNumber = selectedPokemons.length;
  const [isVisible, setIsVisible] = useState(selectedNumber > 0);
  const t = useTranslations('Flyout');

  useEffect(() => {
    setIsVisible(selectedNumber > 0);
  }, [selectedNumber]);

  const onDeselect = () => {
    dispatch(deselectAllPokemons());
  };

  if (!isVisible) {
    return;
  }

  return (
    <div className={styles['flyout-box']}>
      <p>Selected pokemon: {selectedNumber}</p>
      <div className={styles['btn-box']}>
        <Button textContent={t('unselect')} onClick={onDeselect} />
        {selectedNumber > 0 && (
          <Button
            textContent={t('download')}
            onClick={() => downloadFile(selectedPokemons)}
          />
        )}
      </div>
    </div>
  );
};
