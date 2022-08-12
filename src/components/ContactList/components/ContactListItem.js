import { Contact } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => (
  <Contact>
    {name}: {number}{' '}
    <button type="button" onClick={deleteContact} data-id={id}>
      Delete
    </button>
  </Contact>
);
