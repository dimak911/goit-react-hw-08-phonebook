import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  removeContact,
  selectContactsItems,
  selectContactsFilter,
  addFilter,
} from './AppSlice';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const handleNewContact = newContact => {
    if (!hasDuplicates(newContact.name)) {
      dispatch(addContact(newContact));
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  const hasDuplicates = duplicate => {
    return contacts.find(({ name }) => name === duplicate);
  };

  const getFilteredContacts = () => {
    const filterValue = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  };

  const onInputChange = evt => {
    dispatch(addFilter(evt.target.value));
  };

  const deleteContact = contactIdToDelete => {
    dispatch(removeContact(contactIdToDelete));
  };

  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm handleNewContact={handleNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter onInputChange={onInputChange} />
        <ContactList
          contacts={getFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
