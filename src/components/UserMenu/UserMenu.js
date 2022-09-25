import Button from '@mui/material/Button';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserData, selectUser } from 'redux/AuthSlice';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Box display="flex" gridGap="10px" alignItems="center">
      <span>{user.name}</span>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(removeUserData())}
      >
        Log out
      </Button>
    </Box>
  );
};
