import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { DeleteWaterModal } from '../../components/DeleteWaterModal/DeleteWaterModal';
import { LogOutModal } from '../../components/LogOutModal/LogOutModal';
import { Container } from '../../components/Container/Container';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { WaterList } from '../../components/WaterList/WaterList';
import { useState } from 'react';
import { UserSettingsModal } from '../../components/UserSettingsModal/UserSettingsModal';
import { Page } from '../../components/Page/Page';

export default function TrackerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaterModalOpen, setIsWaterModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  // ТИМЧАСОВІ КНОПКИ ДЛЯ ВІДКРИТТЯ МОДАЛОК
  const openWaterModal = () => {
    setIsWaterModalOpen(true);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeWaterModal = () => {
    setIsWaterModalOpen(false);
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

  // ==============================
  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };
  return (
    <Container>
      <Page>
        <p>Tracker page...</p>
        <button type="button" onClick={openModal}>
          Open
        </button>

        <button type="button" onClick={openWaterModal}>
          Open add water
        </button>

        <button type="button" onClick={openSettingsModal}>
          Open settings
        </button>

        <button type="button" onClick={openDeleteModal}>
          Delete Water
        </button>
        <button type="button" onClick={openLogoutModal}>
          Log out
        </button>
        <WaterList />

        <BaseModal isOpen={isOpen} onClose={closeModal}>
          <WaterModal title={'Add water'} />
        </BaseModal>
        <BaseModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <DeleteWaterModal title={'Delete entry'} />
        </BaseModal>
        <BaseModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal}>
          <LogOutModal title={'Log out'} />
        </BaseModal>

        <BaseModal isOpen={isWaterModalOpen} onClose={closeWaterModal}>
          <WaterModal title={'Add water'} />
        </BaseModal>

        <BaseModal isOpen={isSettingsModalOpen} onClose={closeSettingsModal}>
          <UserSettingsModal />
        </BaseModal>
      </Page>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
    </Container>
  );
}
