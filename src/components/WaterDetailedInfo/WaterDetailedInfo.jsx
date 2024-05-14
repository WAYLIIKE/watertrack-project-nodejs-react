import { UserPanel } from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';

export const WaterDetailedInfo = () => {
  return (
    <div className={css.waterDetailedInfoBack}>
      <UserPanel />
    </div>
  );
};
