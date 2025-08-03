import { useCallback, useState } from 'react';
import { DEFAULT_ERROR } from '@/services/api/constants';

type UseFetchProps<T, Args extends unknown[]> = {
  fetchFn: (...args: Args) => Promise<T>;
};

export const useFetch = <T, Args extends unknown[]>({
  fetchFn,
}: UseFetchProps<T, Args>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (...args: Args) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchFn(...args);
        setData(response);
      } catch (error) {
        setError(error instanceof Error ? error.message : DEFAULT_ERROR);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFn]
  );

  return { request: fetchData, data, isLoading, error };
};
