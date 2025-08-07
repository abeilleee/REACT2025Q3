import { INITIAL_PAGE, LIMIT } from './constants';

export const getOffset = (page: number, limit = LIMIT) => {
  return (page - INITIAL_PAGE) * limit;
};
