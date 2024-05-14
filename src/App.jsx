import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/selectors';
import { refresh } from './redux/user/userOps';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                redirectTo="/tracker"
                component={<SignInPage />}
              />
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute redirectTo="/signin" component={<TrackerPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
