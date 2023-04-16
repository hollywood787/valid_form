import { createPortal } from 'react-dom';
import styles from './success-form.module.css';
import { useEffect, useMemo } from 'react';

interface ISuccessForm {
  textContent: string;
  openModal: boolean;
  setOpenModal: (isValid: boolean) => void;
}

const modalRootElement: HTMLElement | null = document.getElementById('portal');

function SuccessForm({ textContent, openModal, setOpenModal }: ISuccessForm) {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (openModal) {
      modalRootElement?.appendChild(element);

      return () => {
        modalRootElement?.removeChild(element);
      };
    }
  });

  if (openModal) {
    return createPortal(
      <div className={styles.modal_background} onClick={() => setOpenModal(false)}>
        <div className={styles.modal_card}>{textContent}</div>
      </div>,
      element,
    );
  }

  return null;
}

export { SuccessForm };
