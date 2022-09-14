import { useSelector } from 'react-redux';
import { ContactListItem } from './components/ContactListItem';
import { Contacts, Wrapper } from './ContactList.styled';
import { selectContactsFilter } from 'redux/AppSlice';
import { useGetContactsQuery } from 'services/contactsApi';
import { Audio } from 'react-loader-spinner';

export const ContactList = () => {
  const { data: contacts, isFetching } = useGetContactsQuery();
  const filter = useSelector(selectContactsFilter);
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <Contacts>
      {isFetching && (
        <Wrapper>
          <Audio
            width="70"
            height="70"
            color="#61dafb"
            radius="9"
            ariaLabel="loading"
          />
        </Wrapper>
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
