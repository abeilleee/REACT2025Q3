import { useEffect, useState } from 'react';
import { ReactHookForm, UncontrolledForm } from '@/features/ui';
import { useFormStore } from '@/shared/model';
import { Modal } from '@/shared/ui';
import { Tile } from '@/widgets';

type FormType = 'controlled' | 'uncontrolled' | null;

export const MainPage = () => {
  const [selectedForm, setSelectedForm] = useState<FormType>(null);
  const { controlledData, unControlledData, isOpen, toggleIsOpen } =
    useFormStore();

  const onClick = (form: FormType) => {
    toggleIsOpen();
    setSelectedForm(form);
  };

  const onClose = () => {
    toggleIsOpen();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <div
        className="pd-base flex gap-3.5 text-amber-50"
        data-testid={'container'}
      >
        <button onClick={() => onClick('controlled')}>React hook form</button>
        <button onClick={() => onClick('uncontrolled')}>
          Uncontrolled form
        </button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          children={
            selectedForm === 'controlled' ? (
              <ReactHookForm />
            ) : (
              <UncontrolledForm />
            )
          }
        />
      </div>
      <div className="pd-base flex flex-wrap justify-around">
        <Tile data={controlledData} title="Controlled Form" />
        <Tile data={unControlledData} title="Uncontrolled Form" />
      </div>
    </>
  );
};
