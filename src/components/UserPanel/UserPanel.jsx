import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';

export const UserPanel = () => {
  return (
    <div className={css.userPanel}>
      <p className={css.userPanel__helloSign}>
        Hello<span className={css.userPanel__nameSign}>, Nadia</span>!
      </p>
      <UserBar />
    </div>
  );
};
