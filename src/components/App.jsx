import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage.js'));
const LoginPage = lazy(() => import('pages/LoginPage.js'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage.js'));
const ContactsPage = lazy(() => import('pages/ContactsPage.js'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="registration" element={<RegistrationPage />}></Route>
          <Route path="contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
    </>
  );
};
