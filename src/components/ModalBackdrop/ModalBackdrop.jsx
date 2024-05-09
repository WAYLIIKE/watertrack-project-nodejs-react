import PropTypes from 'prop-types';
import css from './ModalBackdrop.module.css';

export const ModalBackdrop = ({ onClick, children }) => {
  return (
    <div className={css.backdrop} onClick={onClick}>
      {children}
    </div>
  );
};

ModalBackdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
