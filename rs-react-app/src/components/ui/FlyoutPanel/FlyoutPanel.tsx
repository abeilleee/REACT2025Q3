import { useEffect, useState, type FC } from 'react';
import { Button } from '@/components/ui';
import { useAppDispatch, useSelectedPokemons } from '@/hooks';
import { deselectAllPokemons } from '@/store/slices/pokemonSlice';
import styles from './FlyoutPanel.module.scss';

export const FlyoutPanel: FC = () => {
  const selectedNumber = useSelectedPokemons();
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(selectedNumber > 0);

  useEffect(() => {
    setIsVisible(selectedNumber > 0);
  }, [selectedNumber]);

  const onDeselect = () => {
    dispatch(deselectAllPokemons());
  };

  const onDownLoad = () => {
    console.log('DOWNLOAD');
  };

  if (!isVisible) {
    return;
  }

  return (
    <div className={styles['flyout-box']} data-testid={'flyout'}>
      <p>Selected pokemon: {selectedNumber}</p>
      <div className={styles['btn-box']}>
        <Button textContent="Unselect all" onClick={onDeselect} />
        <Button textContent="Download" onClick={onDownLoad} />
      </div>
    </div>
  );
};
