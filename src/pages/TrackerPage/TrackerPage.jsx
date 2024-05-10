import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { Container } from '../../components/Container/Container';
import { BaseModal } from '../../components/BaseModal/BaseModal';
import { useState } from 'react';

export default function TrackerPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      <BaseModal isOpen={isOpen} onClose={closeModal}>
        <WaterModal title={'Add water'} />
      </BaseModal>
    </Container>
  );
}
