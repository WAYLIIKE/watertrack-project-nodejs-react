import css from './SignUpPage.module.css';
import * as Yup from 'yup';
import { Container } from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { Page } from '../../components/Page/Page';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(/\d/, 'The password must contain at least one number')
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
    passwordRepeat: Yup.string()
      .required('No password provided')
      .matches(/\d/, 'The password must contain at least one number'),
  });

  return (
    <Container>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <Page>
        <div className={css.signupLaptop}>
          <SignUpForm registerSchema={registerSchema} />
          <div className={css.signupPicture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>
    </Container>
  );
}
