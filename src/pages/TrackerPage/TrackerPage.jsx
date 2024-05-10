import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { DeleteWaterModal } from '../../components/DeleteWaterModal/DeleteWaterModal';
import { LogOutModal } from '../../components/LogOutModal/LogOutModal';
import { Container } from '../../components/Container/Container';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { useState } from 'react';

export default function TrackerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <Container>
      <p>Tracker page...</p>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
      <button type="button" onClick={openModal}>
        Open
      </button>
      <button type="button" onClick={openDeleteModal}>
        Delete Water
      </button>
      <button type="button" onClick={openLogoutModal}>
        Log out
      </button>
      <BaseModal isOpen={isOpen} onClose={closeModal}>
        <WaterModal title={'Add water'} />
      </BaseModal>
      <BaseModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <DeleteWaterModal title={'Delete entry'} />
      </BaseModal>
      <BaseModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal}>
        <LogOutModal title={'Log out'} />
      </BaseModal>
    </Container>
  );
}