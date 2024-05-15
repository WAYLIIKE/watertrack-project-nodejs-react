import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/selectors';
import { current } from './redux/user/userOps';
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
    dispatch(current());
  }, [dispatch]);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   const fetchData = async () => {
  //     const currentUserData = await dispatch(
  //       current({
  //         abortController: controller,
  //       })
  //     );
  //     if (currentUserData) {
  //       await dispatch(
  //         refresh({
  //           abortController: controller,
  //         })
  //       );
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     controller.abort();
  //   };
  // }, [dispatch]);

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
