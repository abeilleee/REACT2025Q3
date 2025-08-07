import { BASE_URL } from '@/utils/constants';

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    const errorText = await response.text();
    throw {
      status: response.status,
      data: `${response.statusText} ${errorText}`,
    };
  }
  const data = (await response.json()) as T;
  return data;
};
