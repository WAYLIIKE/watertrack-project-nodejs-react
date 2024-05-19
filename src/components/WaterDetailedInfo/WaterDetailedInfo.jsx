import { Container } from '../Container/Container';
import { DailyInfo } from '../DailyInfo/DailyInfo';
import { UserPanel } from '../UserPanel/UserPanel';
import css from './WaterDetailedInfo.module.css';

export const WaterDetailedInfo = ({
  openSettings,
  openLogout,
  openWaterModal,
}) => {
  return (
    <section className={css.waterDetailedInfoBack}>
      <h2 className="visually-hidden">Water detailed info</h2>
      <Container>
        <UserPanel openSettings={openSettings} openLogout={openLogout} />
        <DailyInfo openWaterModal={openWaterModal} />
      </Container>
    </section>
  );
};
