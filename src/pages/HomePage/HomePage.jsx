import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { Page } from '../../components/Page/Page';
import { MonthInfo } from '../../components/MonthInfo/MonthInfo';

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
      <MonthInfo />
    </Container>
  );
}
