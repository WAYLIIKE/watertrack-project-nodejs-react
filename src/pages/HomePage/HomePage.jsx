import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import css from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.page}>
        <Logo />
        <WelcomeSection />
        <AdvantagesSection />
      </div>
    </Container>
  );
}
