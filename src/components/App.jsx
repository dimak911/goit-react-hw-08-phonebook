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
    number: '',
  };

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
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
