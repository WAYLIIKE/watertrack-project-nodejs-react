import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';

export default function HomePage() {
  return (
    <Container>
      <p>Home page...</p>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </Container>
  );
}
