import { WaterForm } from '../WaterForm/WaterForm';
import css from './WaterModal.module.css';

export const WaterModal = ({ title }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <WaterForm />
    </div>
  );
};
