import { Helmet } from 'react-helmet-async';
import { LogOutModal } from '../../components/LogOutModal/LogOutModal';
import { Container } from '../../components/Container/Container';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { WaterList } from '../../components/WaterList/WaterList';
import { useState } from 'react';
import { UserSettingsModal } from '../../components/UserSettingsModal/UserSettingsModal';
import { Page } from '../../components/Page/Page';
import { WaterMainInfo } from '../../components/WaterMainInfo/WaterMainInfo';
import { MonthInfo } from '../../components/MonthInfo/MonthInfo';

export default function TrackerPage() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  // ТИМЧАСОВІ КНОПКИ ДЛЯ ВІДКРИТТЯ МОДАЛОК

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };
  return (
    <Container>
      <Page>
        
        <WaterMainInfo />
        
        <MonthInfo />

        

        <BaseModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal}>
          <LogOutModal title={'Log out'} onClose={closeLogoutModal} />
        </BaseModal>

        <BaseModal isOpen={isSettingsModalOpen} onClose={closeSettingsModal}>
          <UserSettingsModal />
        </BaseModal>
        
      </Page>
      
      <div style={{display: 'block', margin: '100px 0'}}>
      <WaterList />
          <button type="button" onClick={openSettingsModal}>
            Open settings
          </button>
          <button type="button" onClick={openLogoutModal}>
            Log out
          </button>
        </div>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
    </Container>
  );
}
