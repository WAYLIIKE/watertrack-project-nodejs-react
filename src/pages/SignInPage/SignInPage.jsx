import { useState } from 'react';
import css from './SignInPage.module.css';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { SignInForm } from '../../components/SignInForm/SignInForm';
import { ForgotPasswordModal } from '../../components/ForgotPasswordModal/ForgotPasswordModal';
import { BaseModal } from '../../components/BaseModal/BaseModal';
export default function SignInPage() {
  const [isForgotPassModalOpen, setIsForgotPassModalOpen] = useState(false);

  const openForgotPassModal = () => setIsForgotPassModalOpen(true);

  const closeForgotPassword = () => setIsForgotPassModalOpen(false);

  return (
    <Container>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <Page>
        <div className={css.signinLaptop}>
          <SignInForm openForgotPassModal={openForgotPassModal} />
          <div className={css.signinPicture}>
            <AdvantagesSection />
          </div>
        </div>
      </Page>

      <BaseModal isOpen={isForgotPassModalOpen} onClose={closeForgotPassword}>
        <ForgotPasswordModal />
      </BaseModal>
    </Container>
  );
}
