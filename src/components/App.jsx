import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      this.getItemsFromLocalStorage();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {
    try {
      if (this.isContactsChange) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleNewContact = newContact => {
    if (!this.hasDuplicates(newContact.name)) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  hasDuplicates(duplicate) {
    return this.state.contacts.find(({ name }) => name === duplicate);
  }

  getFilteredContacts = () => {
    const filterValue = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  };

  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  deleteContact = contactIdToDelete => {
    this.setState({
      contacts: this.state.contacts.filter(
        ({ id }) => id !== contactIdToDelete
      ),
    });
  };

  getItemsFromLocalStorage = () => {
    localStorage.getItem('contacts') &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
  };

  isContactsChange = () => {
    return (
      localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts')) !== this.state.contacts
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <ContactForm handleNewContact={this.handleNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter onInputChange={this.onInputChange} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
