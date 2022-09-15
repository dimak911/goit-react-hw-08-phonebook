import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { EditFormWrapper } from './EditContact.styled';

export const EditContact = ({ id }) => {
  return (
    <EditFormWrapper>
      <h2>Edit contact</h2>
      <Box as="form" display="flex" flexDirection="column" gridGap="10px">
        <label>
          <div>Name</div>
          <input type="text" />
        </label>

        <label>
          <div>Number</div>
          <input type="text" />
        </label>
        <button type="submit">Save</button>
      </Box>
    </EditFormWrapper>
  );
};

EditContact.propType = {
  id: PropTypes.string.isRequired,
};
