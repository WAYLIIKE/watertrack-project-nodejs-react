import PropTypes from 'prop-types';
import css from './BaseModal.module.css';
import { IconClose } from '../Icons/IconClose';
import Modal from 'react-modal';

export const BaseModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      className={css.modalContent}
      closeTimeoutMS={300}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <button onClick={() => onClose()}>
        <IconClose className={css.button} />
      </button>
      {children}
    </Modal>
  );
};
BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
