import { useSelector } from 'react-redux';
import { ContactListItem } from './components/ContactListItem';
import { Contacts } from './ContactList.styled';
// import { useState } from 'react';
import { selectContactsFilter } from 'redux/AppSlice';
import { useGetContactsQuery } from 'services/contactsApi';
import { Audio } from 'react-loader-spinner';

export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  console.log(contacts);
  // const [filter, setFilter] = useState([]);
  // const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {isFetching && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
        />
      )}
      {filteredContacts?.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <li>No contacts</li>
      )}
    </Contacts>
  );
};
