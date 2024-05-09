import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

export default function TrackerPage() {
  return (
    <Container>
      <p>Tracker page...</p>
      <Helmet>
        <title>Tracker</title>
      </Helmet>
    </Container>
  );
}
