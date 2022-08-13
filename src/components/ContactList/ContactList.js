import PropTypes from 'prop-types';
import { ContactListItem } from './components/ContactListItem';
import { Contacts } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => (
  <Contacts>
    {contacts.length ? (
      contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
          id={id}
        />
      ))
    ) : (
      <li>No contacts</li>
    )}
  </Contacts>
);

ContactList.propTypes = {
  deleteContact: PropTypes.elementType.isRequired,
  contacts: PropTypes.array.isRequired,
};
