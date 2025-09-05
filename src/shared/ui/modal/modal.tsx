import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleKeyClose = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center backdrop-blur-sm"
      onMouseDown={(e) => handleBackdropClick(e)}
      onKeyDown={(e) => handleKeyClose(e)}
      data-testid={'backdrop'}
    >
      {children}
    </div>,
    document.body
  );
};
