import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { Container } from '../../components/Container/Container';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { useState } from 'react';
import { UserSettingsModal } from '../../components/UserSettingsModal/UserSettingsModal';

export default function TrackerPage() {
  const [isWaterModalOpen, setIsWaterModalOpen] = useState(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  // ТИМЧАСОВІ КНОПКИ ДЛЯ ВІДКРИТТЯ МОДАЛОК
  const openWaterModal = () => {
    setIsWaterModalOpen(true);
  };

  const closeWaterModal = () => {
    setIsWaterModalOpen(false);
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
      <p>Tracker page...</p>
      <Helmet>
        <title>Tracker</title>
      </Helmet>

      <button type="button" onClick={openWaterModal}>
        Open add water
      </button>

      <button type="button" onClick={openSettingsModal}>
        Open settings
      </button>

      <BaseModal isOpen={isWaterModalOpen} onClose={closeWaterModal}>
        <WaterModal title={'Add water'} />
      </BaseModal>

      <BaseModal isOpen={isSettingsModalOpen} onClose={closeSettingsModal}>
        <UserSettingsModal />
      </BaseModal>
    </Container>
  );
}
