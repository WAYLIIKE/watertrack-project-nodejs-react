import css from './SignInPage.module.css';
import * as Yup from 'yup';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { SignInForm } from '../../components/SignInForm/SignInForm';
export default function SignInPage() {
  // const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(/\d/, 'The password must contain at least one number')
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
  });

  return (
    <Container>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Page>
        <div className={css.signinLaptop}>
          <SignInForm loginSchema={loginSchema} />
          <div className={css.signinPicture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>
    </Container>
  );
}
