import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { SignInForm } from '../../components/SignInForm/SignInForm';
export default function SignInPage() {
  return (
    <Container>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Page>
        <div className={css.signinLaptop}>
          <SignInForm />
          <div className={css.signinPicture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>
    </Container>
  );
}
