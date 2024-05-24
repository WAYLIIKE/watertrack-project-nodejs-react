import { Helmet } from 'react-helmet-async';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import { Container } from '../../components/Container/Container';
import { EmailVerifySection } from '../../components/EmailVerifySection/EmailVerifySection';
import { Page } from '../../components/Page/Page';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyEmail } from '../../redux/user/userOps';

export default function EmailVerifyPage() {
  const dispatch = useDispatch();
  const [isTokenValid, setIsTokenValid] = useState(null);
  const navigate = useNavigate();

  const params = useParams();

  const token = params.verifyToken;

  // useEffect(() => {
  //   dispatch(verifyEmail(token));
  // }, [dispatch, token]);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await dispatch(verifyEmail(token));

        if (response.payload) {
          setIsTokenValid(true);
        } else {
          setIsTokenValid(false);
        }
      } catch (error) {
        return;
      }
    };

    checkToken();
  }, [dispatch, token]);

  useEffect(() => {
    if (isTokenValid === false) {
      navigate('/not-found-page');
    }
  }, [navigate, isTokenValid]);

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
