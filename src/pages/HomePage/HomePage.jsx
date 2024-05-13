import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import css from '../HomePage/HomePage.module.css';
import { Page } from '../../components/Page/Page';

export default function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
      </Page>
    </Container>
  );
}
