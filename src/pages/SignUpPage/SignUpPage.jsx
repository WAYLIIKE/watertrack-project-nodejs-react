import css from './SignUpPage.module.css';
import { Container } from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { Page } from '../../components/Page/Page';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  return (
    <Container>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <Page>
        <div className={css.signupLaptop}>
          <SignUpForm />
          <div className={css.signupPicture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>
    </Container>
  );
}
