import { useSelector } from 'react-redux';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { selectUser } from '../../redux/selectors';

export const UserPanel = ({ openSettings, openLogout }) => {
  const user = useSelector(selectUser);

  return (
    <div className={css.userPanel}>
      <h2 className={css.userPanel__helloSign}>
        Hello<span className={css.userPanel__nameSign}>, {user.name}</span>!
      </h2>
      <UserBar openSettings={openSettings} openLogout={openLogout} user={user} />
    </div>
  );
};
