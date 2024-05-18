import { useState } from 'react';
import { IconPlusWater } from '../Icons/IconPlusWater';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { WaterModal } from '../WaterModal/WaterModal';
import css from './AddWaterBtn.module.css';

export const AddWaterBtn = () => {
  const [isWaterModalOpen, setIsWaterModalOpen] = useState(false);

  const openWaterModal = () => {
    setIsWaterModalOpen(true);
  };

  const closeWaterModal = () => {
    setIsWaterModalOpen(false);
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={openWaterModal}>
        <IconPlusWater />
        <span>Add water</span>
      </button>
      <BaseModal isOpen={isWaterModalOpen} onClose={closeWaterModal}>
        <WaterModal
          title={'Add water'}
          subtitle={'Choose a value:'}
          onClose={closeWaterModal}
        />
      </BaseModal>
    </>
  );
};
