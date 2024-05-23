import { Helmet } from 'react-helmet-async';
import css from './ResetPasswordPage.module.css';
import { Container } from '../../components/Container/Container';
import { Page } from '../../components/Page/Page';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { ResetPasswordForm } from '../../components/ResetPasswordForm/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <Container>
      <Helmet>
        <title>Password reset</title>
      </Helmet>

      <Page>
        <div className={css.laptop}>
          <ResetPasswordForm />
          <div className={css.picture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>
    </Container>
  );
}
