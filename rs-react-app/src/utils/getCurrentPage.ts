import { INITIAL_PAGE } from './constants';

export const getCurrentPage = (searchParams: URLSearchParams) => {
  return Number(searchParams.get('page') || INITIAL_PAGE);
};
