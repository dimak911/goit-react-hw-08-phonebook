import PropTypes from 'prop-types';
import { Component } from 'react';
import { Label, FormBox } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  resetInputs() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { onFormSubmit } = this.props;
    return (
      <FormBox
        onSubmit={evt => {
          onFormSubmit(evt);
          this.resetInputs();
        }}
        autoComplete="off"
      >
        <Label>
          <span>Name</span>
          <input
            onChange={this.onInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <span>Number</span>
          <input
            onChange={this.onInputChange}
            value={this.state.number}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit">Add contact</button>
      </FormBox>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.elementType.isRequired,
};
