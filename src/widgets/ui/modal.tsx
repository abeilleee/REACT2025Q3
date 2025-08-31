import { memo, useEffect, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '@/widgets/model';

type ModalProps = {
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  const { isOpen, toggleIsOpen } = useModalStore();

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      toggleIsOpen();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center backdrop-blur-sm"
      onMouseDown={(e) => handleBackdropClick(e)}
    >
      {children}
    </div>,
    document.body
  );
};

export default memo(Modal);
