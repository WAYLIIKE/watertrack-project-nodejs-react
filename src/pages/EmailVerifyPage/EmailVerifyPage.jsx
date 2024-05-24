import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { EmailVerifySection } from '../../components/EmailVerifySection/EmailVerifySection';
import { Page } from '../../components/Page/Page';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../redux/user/userOps';

export default function EmailVerifyPage() {
  const dispatch = useDispatch();

  const params = useParams();

  const token = params.verifyToken;

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, [dispatch, token]);

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
