import { Label, FormBox } from './Form.styled';

export const Form = ({ onNameChange, name, onFormSubmit }) => {
  return (
    <FormBox onSubmit={onFormSubmit}>
      <Label>
        <span>Name</span>
        <input
          onChange={onNameChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </FormBox>
  );
};
