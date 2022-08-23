import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      getItemsFromLocalStorage();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (isContactsChange) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    } catch (error) {
      console.log(error);
    }
  });

  const handleNewContact = newContact => {
    if (!hasDuplicates(newContact.name)) {
      setContacts([...contacts, newContact]);
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
    setFilter(evt.target.value);
  };

  const deleteContact = contactIdToDelete => {
    setContacts(contacts.filter(({ id }) => id !== contactIdToDelete));
  };

  const getItemsFromLocalStorage = () => {
    localStorage.getItem('contacts') &&
      setContacts(JSON.parse(localStorage.getItem('contacts')));
  };

  const isContactsChange = () => {
    return (
      localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts')) !== contacts
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm handleNewContact={handleNewContact} />
      </Section>
      <Section title="Contacts">
        <Filter onInputChange={onInputChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
