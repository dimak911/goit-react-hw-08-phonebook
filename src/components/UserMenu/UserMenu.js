import Button from '@mui/material/Button';
import { Box } from 'components/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserData } from 'redux/auth/auth-slice';
import { selectIsLoggedIn, selectToken } from 'redux/auth/auth-selectors';
import { useLogoutMutation } from 'services/contactsApi';
import { useFetchCurrentUserQuery } from 'services/contactsApi';

export const UserMenu = () => {
  const [skip, setSkip] = useState(true);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!token && !isLoggedIn) {
      setSkip(true);
    } else {
      setSkip(false);
    }
  }, [isLoggedIn, token]);

  const { data, isSuccess } = useFetchCurrentUserQuery(undefined, {
    skip,
  });
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch(removeUserData());
  };

  return (
    <Box display="flex" gridGap="10px" alignItems="center">
      {isSuccess && <span>Welcome, {data.name}</span>}
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Log out
      </Button>
    </Box>
  );
};
