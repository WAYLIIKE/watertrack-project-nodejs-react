import { UserSettingsForm } from '../UserSettingsForm/UserSettingsForm';
import css from './UserSettingsModal.module.css';
export const UserSettingsModal = ({ onClose }) => {
  return (
    <section className={css.wrapper}>
      <h2 className={css.title}>Setting</h2>
      <UserSettingsForm onClose={onClose} />
    </section>
  );
};
