import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div>
      <p>Home page...</p>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
  );
}
