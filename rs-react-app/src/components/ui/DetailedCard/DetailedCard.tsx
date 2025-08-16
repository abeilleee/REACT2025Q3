'use client';

import { skipToken } from '@reduxjs/toolkit/query';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';
import { placeholder } from '@/assets';
import { Button, ErrorState, Spinner } from '@/components/ui';
import { Link } from '@/i18n/navigation';
import { useGetPokemonDataQuery } from '@/store/slices/pokemon';
import styles from './DetailedCard.module.scss';

const MAX_VALUE = 200;

export const DetailedCard: FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const t = useTranslations('DetailedCard');
  const name = params?.name as string;
  const page = searchParams.get('page');

  const {
    data: pokemon,
    isFetching: isLoading,
    error,
    refetch,
  } = useGetPokemonDataQuery(name ?? skipToken);

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
        <Link href={`/?page=${page}`} className="link">
          {t('close')}
        </Link>
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
                width={150}
                height={150}
                priority
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
          <Link href={`/?page=${page}`} className="link">
            {t('close')}
          </Link>
          <Button onClick={refetch} textContent={t('refetch')} />
        </div>
      </div>
    );
};
