import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Logo } from '../Logo/Logo';

export const SharedLayout = () => {
  return (
    <div>
      {/* <Logo /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
