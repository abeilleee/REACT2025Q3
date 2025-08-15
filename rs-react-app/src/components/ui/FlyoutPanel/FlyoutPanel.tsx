'use client';

import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSelectedPokemons } from '@/store/selectors/pokemonSelector';
import { deselectAllPokemons, PokemonData } from '@/store/slices/pokemon';
import { convertToCSV } from '@/utils';
import styles from './FlyoutPanel.module.scss';

export const FlyoutPanel: FC = () => {
  const selectedPokemons = useAppSelector(getSelectedPokemons);
  const dispatch = useAppDispatch();
  const selectedNumber = selectedPokemons.length;
  const [isVisible, setIsVisible] = useState(selectedNumber > 0);

  useEffect(() => {
    setIsVisible(selectedNumber > 0);
  }, [selectedNumber]);

  const onDeselect = () => {
    dispatch(deselectAllPokemons());
  };

  const onDownLoad = (data: PokemonData[]) => {
    const blob = new Blob([convertToCSV(data)], { type: 'application/csv' });
    return URL.createObjectURL(blob);
  };

  if (!isVisible) {
    return;
  }

  return (
    <div className={styles['flyout-box']}>
      <p>Selected pokemon: {selectedNumber}</p>
      <div className={styles['btn-box']}>
        <Button textContent="Unselect all" onClick={onDeselect} />
        {selectedNumber > 0 && (
          <a
            className={styles.link}
            href={onDownLoad(selectedPokemons)}
            download={`${selectedNumber}_items.csv`}
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
};
