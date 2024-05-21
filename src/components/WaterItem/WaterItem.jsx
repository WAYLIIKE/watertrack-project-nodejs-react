import { useState } from 'react';
import { IconGlass } from '../Icons/IconGlass';
import { IconEdit } from '../../components/Icons/IconEdit';
import { IconTrash } from '../../components/Icons/IconTrash';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { DeleteWaterModal } from '../../components/DeleteWaterModal/DeleteWaterModal';
import css from './WaterItem.module.css';
import { formatTimestampToTime } from '../../helpers/formatTimestampToTime';

export const WaterItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const timezoneOffset = new Date().getTimezoneOffset();

  const offset = timezoneOffset * 60 * 1000;

  const formattedTime = formatTimestampToTime(item.date + offset);

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
      <IconGlass size={38} />
      <div className={css.textWrapper}>
        <p className={css.amount}>{item.amount} ml</p>
        <p className={css.time}>{formattedTime}</p>
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
        <WaterModal
          title={'Edit the entered amount of water'}
          subtitle={'Correct entered data:'}
          onClose={closeModal}
          toggleHandle={false}
          water={item}
        />
      </BaseModal>
      <BaseModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <DeleteWaterModal
          title={'Delete entry'}
          id={item._id}
          closeDeleteModal={closeDeleteModal}
        />
      </BaseModal>
    </div>
  );
};
