import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  searchResult = null;

  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const newName = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newName],
        name: '',
        number: '',
      };
    });
  };

  onFilter = evt => {
    const filterValue = evt.target.value.toLowerCase();
    this.onInputChange(evt);
    this.searchResult = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <Form
            onInputChange={this.onInputChange}
            name={this.state.name}
            number={this.state.number}
            onFormSubmit={this.onFormSubmit}
          />
        </Section>
        <Section title="Contacts">
          <Filter onFilter={this.onFilter} />
          <Contacts contacts={this.searchResult ?? this.state.contacts} />
        </Section>
      </>
    );
  }
}
