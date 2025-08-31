import { useModalStore } from '@/widgets/model';
import { Search } from './search';
import { SelectYear } from './select-year';
import { SortVariant } from './sort-variant';

export const Controllers = () => {
  const { toggleIsOpen } = useModalStore();

  return (
    <div className="pd-base sticky top-0 flex items-center gap-5 bg-gray-600">
      <button onClick={toggleIsOpen}>Select columns</button>
      <SelectYear />
      <SortVariant />
      <Search />
    </div>
  );
};
