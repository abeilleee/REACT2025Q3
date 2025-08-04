import { cloneElement, type ReactElement } from 'react';

type Props = {
  element: ReactElement;
  count: number;
};

export const cloneComponent = ({ element, count }: Props) => {
  return Array.from({ length: count }, (_, index) =>
    cloneElement(element, { key: index })
  );
};
