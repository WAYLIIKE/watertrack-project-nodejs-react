import { Helmet } from 'react-helmet-async';
import { WaterModal } from '../../components/WaterModal/WaterModal';
import { Container } from '../../components/Container/Container';

export default function TrackerPage() {
  return (
    <Container>
      <p>Tracker page...</p>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
      <WaterModal title={'Add water'} />
    </Container>
  );
}
