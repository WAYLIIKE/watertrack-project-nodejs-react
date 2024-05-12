import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TbError404 } from 'react-icons/tb';
import { Container } from '../../components/Container/Container';
import css from './NotFoundPage.module.css';
import { Page } from '../../components/Page/Page';

export default function NotFound() {
  return (
    <Container>
      <Page>
        <div className={css.container}>
          <TbError404 size={150} color="var(--color-lightgreen)" />
          <p className={css.text}>Ooooooops, not found page!</p>
          <NavLink to="/" className={css.link}>
            Go to the home page...
          </NavLink>
        </div>
      </Page>
      <Helmet>
        <title>Not found</title>
      </Helmet>
    </Container>
  );
}
