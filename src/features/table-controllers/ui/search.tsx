import { type FC } from 'react';
import { useSearchStore } from '@/features/table-controllers/model';

export const Search: FC = () => {
  const { setSearchTerm } = useSearchStore();

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
