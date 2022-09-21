import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from './SharedLayout.styled';
import { GlobalStyle } from 'components/GlobalStyle';

export const SharedLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/contacts">Contacts</Link>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </Box>
  );
};
