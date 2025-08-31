import { useModalStore } from '@/widgets/model';
import { SelectYear } from './select-year';

export const Controllers = () => {
  const { toggleIsOpen } = useModalStore();

  return (
    <div className="pd-base flex items-center gap-5 bg-amber-50/20">
      <button onClick={toggleIsOpen}>Select columns</button>
      <SelectYear />
    </div>
  );
};
