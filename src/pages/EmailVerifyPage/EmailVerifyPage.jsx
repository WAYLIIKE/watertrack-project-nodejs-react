import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { EmailVerifySection } from '../../components/EmailVerifySection/EmailVerifySection';
import { Page } from '../../components/Page/Page';

export default function EmailVerifyPage() {
  return (
    <Container>
      <Helmet>
        <title>Verification</title>
      </Helmet>
      <Page>
        <EmailVerifySection />
        <AdvantagesSection />
      </Page>
    </Container>
  );
}
