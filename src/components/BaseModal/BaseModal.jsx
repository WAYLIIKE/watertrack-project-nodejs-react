import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './BaseModal.module.css';
import { ModalBackdrop } from '../ModalBackdrop/ModalBackdrop';
import { IconClose } from '../Icons/IconClose';

export const BaseModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
  };
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalBackdrop onClick={handleBackdropClick}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          {children}
          <IconClose className={css.button} onClick={handleClose}>
            Close
          </IconClose>
        </div>
      </div>
    </ModalBackdrop>
  ) : null;
};

BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
