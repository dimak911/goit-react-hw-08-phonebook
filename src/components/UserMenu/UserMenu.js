import { Box } from 'components/Box';

export const UserMenu = () => {
  return (
    <Box display="flex" gridGap="10px" alignItems="center">
      <span>User Name</span>
      <button type="button">Log out</button>
    </Box>
  );
};
