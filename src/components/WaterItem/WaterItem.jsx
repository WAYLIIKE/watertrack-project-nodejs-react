import { useState } from 'react';
import { IconGlass } from '../Icons/IconGlass';
import { IconEdit } from '../../components/Icons/IconEdit';
import { IconTrash } from '../../components/Icons/IconTrash';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { DeleteWaterModal } from '../../components/DeleteWaterModal/DeleteWaterModal';
import css from './WaterItem.module.css';

export const WaterItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <div className={css.itemWrapper}>
      <IconGlass />
      <div className={css.textWrapper}>
        <p className={css.amount}>250 ml</p>
        <p className={css.time}>11:34 AM</p>
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.button} type="button" onClick={openModal}>
          <IconEdit className={css.icon} />
        </button>
        <button className={css.button} type="button" onClick={openDeleteModal}>
          <IconTrash className={css.icon} />
        </button>
      </div>
      <BaseModal isOpen={isOpen} onClose={closeModal}>
        <WaterModal title={'Edit the entered amount of water'} />
      </BaseModal>
      <BaseModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <DeleteWaterModal title={'Delete entry'} />
      </BaseModal>
    </div>
  );
};
