import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeContact } from '../../../redux/AppSlice';
import { Contact } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = contactIdToDelete => {
    dispatch(removeContact(contactIdToDelete));
  };

  return (
    <Contact>
      {name}: {number}{' '}
      <button type="button" onClick={() => deleteContact(id)} data-id={id}>
        Delete
      </button>
    </Contact>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
