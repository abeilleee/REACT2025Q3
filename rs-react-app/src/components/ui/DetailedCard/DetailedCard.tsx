import { useEffect, type FC } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import placeholder from '@/assets/images/no-img.png';
import { Button, Error, Spinner } from '@/components/ui';
import { useFetch } from '@/hooks';
import { pokeApi } from '@/services';
import { PATHS } from '@/services/router/constants';
import { ZERO } from '@/utils/constants';
import styles from './DetailedCard.module.scss';

const MAX_VALUE = 200;

const fetchFn = async (name: string) => {
  const result = await pokeApi.getPokemonData(name);
  return result;
};

export const DetailedCard: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';

  const {
    data: pokemon,
    isLoading,
    error,
    request,
  } = useFetch({
    fetchFn,
  });

  useEffect(() => {
    if (name) request(name);
  }, [name, request]);

  const onCLick = () => {
    navigate(PATHS.ROOT);
    setSearchParams({ page: currentPage });
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
      <div className={styles.card} data-testid="error-container">
        <Error error={error}></Error>
      </div>
    );
  }

  if (pokemon)
    return (
      <div className={styles.card} data-testid={name}>
        <div className={styles.title} data-testid="title">
          <span className={styles.name}>{name}</span>
        </div>
        <div className={styles.content}>
          <div className={styles['img-container']} data-testid="img-container">
            <div className={styles['img-box']}>
              <img
                src={pokemon.sprites?.homefrontDefault || placeholder}
                alt={pokemon.name}
              />
            </div>
            <div className={styles.stats} data-testid="stats-box">
              {pokemon.stats.name.map((stat, idx) => (
                <div className={styles.stat} key={idx}>
                  <span className={styles['stat-label']}>{stat}</span>
                  <div className={styles['stat-bar']}>
                    <div
                      className={styles['stat-fill']}
                      style={{
                        width: `${(pokemon.stats.base[idx] / MAX_VALUE) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span
                    className={styles['stat-value']}
                    data-testid="stat-value"
                  >
                    {pokemon.stats.base[idx] || ZERO}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Button onClick={onCLick} textContent="Close"></Button>
        </div>
      </div>
    );
};
