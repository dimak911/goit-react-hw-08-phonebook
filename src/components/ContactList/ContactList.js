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
      <li>No contacts added yet</li>
    )}
  </Contacts>
);
