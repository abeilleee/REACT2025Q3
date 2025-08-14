import { skipToken } from '@reduxjs/toolkit/query';
import Image from 'next/image';
import { type FC } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { placeholder } from '@/assets';
import { Button, ErrorState, Spinner } from '@/components/ui';
import { PATHS } from '@/services/router/constants';
import { useGetPokemonDataQuery } from '@/store/slices/api/pokemonApi';
import { getCurrentPage } from '@/utils';
import styles from './DetailedCard.module.scss';

const MAX_VALUE = 200;

export const DetailedCard: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: pokemon,
    isFetching: isLoading,
    error,
    refetch,
  } = useGetPokemonDataQuery(name ?? skipToken);
  const currentPage = getCurrentPage(searchParams);

  const onCLick = () => {
    navigate(PATHS.ROOT);
    setSearchParams({ page: String(currentPage) });
  };

  if (isLoading) {
    return (
      <div className={styles.card}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.card}>
        <ErrorState errorMessage={error} />
        <Button onClick={onCLick} textContent="Close" />
      </div>
    );
  }

  if (pokemon)
    return (
      <div className={styles.card}>
        <div className={styles.title}>
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.content}>
          <div className={styles['img-container']}>
            <div className={styles['img-box']}>
              <Image
                src={pokemon.sprites || placeholder}
                alt={pokemon.name}
                width="150"
                height="150"
              />
            </div>
            <div className={styles.stats}>
              {pokemon.stats.name.map((stat, idx) => (
                <div className={styles.stat} key={idx}>
                  <span className={styles['stat-label']}>{stat}</span>
                  <div className={styles['stat-bar']}>
                    <div
                      className={styles['stat-fill']}
                      style={{
                        width: `${(pokemon.stats.base[idx] / MAX_VALUE) * 100}%`,
                      }}
                    />
                  </div>
                  <span className={styles['stat-value']}>
                    {pokemon.stats.base[idx]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Button onClick={onCLick} textContent="Close" />
          <Button onClick={refetch} textContent="Refetch" />
        </div>
      </div>
    );
};
