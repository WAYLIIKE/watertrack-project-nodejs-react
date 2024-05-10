import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';

export default function HomePage() {
  return (
    <Container>
      <WelcomeSection />
      <AdvantagesSection />
    </Container>
  );
}
