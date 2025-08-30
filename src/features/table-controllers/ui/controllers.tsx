import { useModalStore } from '@/widgets/model';

export const Controllers = () => {
  const { toggleIsOpen } = useModalStore();

  return <button onClick={toggleIsOpen}>Select columns</button>;
};
