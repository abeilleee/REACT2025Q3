import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { useAppDispatch, useAppSelector, useSelectedPokemons } from '@/hooks';
import { deselectAllPokemons, getSelectedPokemons } from '@/store';
import { convertToCSV, type PokemonData } from '@/utils';
import styles from './FlyoutPanel.module.scss';

export const FlyoutPanel: FC = () => {
  const selectedNumber = useSelectedPokemons();
  const selectedPokemons = useAppSelector(getSelectedPokemons);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(selectedNumber > 0);

  useEffect(() => {
    setIsVisible(selectedNumber > 0);
  }, [selectedNumber]);

  const onDeselect = () => {
    dispatch(deselectAllPokemons());
  };

  const onDownLoad = (data: PokemonData[]) => {
    if (!data) {
      return;
    }

    const blob = new Blob([convertToCSV(data)], { type: 'application/csv' });
    return URL.createObjectURL(blob);
  };

  if (!isVisible) {
    return;
  }

  return (
    <div className={styles['flyout-box']} data-testid={'flyout'}>
      <p>Selected pokemon: {selectedNumber}</p>
      <div className={styles['btn-box']}>
        <Button textContent="Unselect all" onClick={onDeselect} />
        {selectedPokemons.length > 0 && (
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
