import clsx from 'clsx';
import { IconPlusWater } from '../Icons/IconPlusWater';
import css from './AddWaterBtn.module.css';

export const AddWaterBtn = ({ openWaterModal, isPrimary = true }) => {
  return (
    <>
      <button
        className={clsx(
          css.btn,
          isPrimary ? css.btn__Primary : css.btn__Secondary
        )}
        type="button"
        onClick={openWaterModal}
      >
        <IconPlusWater
          isPrimary={isPrimary}
          className={clsx(css.btn__svg, isPrimary && css.btn__svg_primary)}
        />
        <span>Add water</span>
      </button>
    </>
  );
};
