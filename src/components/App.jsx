import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const newName = {
      id: nanoid(),
      name: evt.target.elements.name.value,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newName],
        name: '',
      };
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <Form
            onNameChange={this.onNameChange}
            name={this.state.name}
            onFormSubmit={this.onFormSubmit}
          />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
