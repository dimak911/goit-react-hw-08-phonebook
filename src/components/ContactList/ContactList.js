import { useSelector } from 'react-redux';
import { ContactListItem } from './components/ContactListItem';
import { Contacts } from './ContactList.styled';
import {
  selectContactsFilter,
  selectContactsItems,
} from '../../redux/AppSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <li>No contacts</li>
      )}
    </Contacts>
  );
};
