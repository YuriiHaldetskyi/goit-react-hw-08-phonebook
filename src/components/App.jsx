import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';
import { Home } from 'pages/Home/Home';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { PhonebookPage } from 'pages/Phonebook/Phonebook';

// const HomePage = lazy(() => import('../pages/Home/Home'));
// const RegisterPage = lazy(() => import('../pages/Register/Register'));
// const LoginPage = lazy(() => import('../pages/Login/Login'));
// const ContactsPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <>
      <b>Refreshing user...</b>
    </>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
