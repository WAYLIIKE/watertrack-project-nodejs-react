import css from './ResendEmailPassword.module.css';

export const ResendEmailButton = ({ openResendModal }) => {
  return (
    <button
      className={css.forgotPassword}
      type="button"
      onClick={openResendModal}
    >
      Resend email
    </button>
  );
};
