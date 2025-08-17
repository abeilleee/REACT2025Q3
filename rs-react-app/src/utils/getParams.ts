import { INITIAL_PAGE } from './constants';

type Props = {
  searchTerm?: string | undefined;
  page?: string | undefined;
};

export const getParams = (params: Props) => {
  const searchTerm = params.searchTerm ?? '';
  const currentPage = params.page ? +params.page : INITIAL_PAGE;

  return { searchTerm, currentPage };
};
