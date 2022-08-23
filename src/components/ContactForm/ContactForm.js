import PropTypes from 'prop-types';
// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { Label, FormBox, Error } from './ContactForm.styled';

let render = 0;

export const ContactForm = ({ handleNewContact }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    resetField,
  } = useForm({
    defaultValues: { name: '', number: '' },
  });

  const nameValue = watch('name');
  const numberValue = watch('number');

  // const onInputChange = evt => {
  //   switch (evt.target.name) {
  //     case 'name':
  //       setName(evt.target.value);
  //       break;

  //     case 'number':
  //       setNumber(evt.target.value);
  //       break;

  //     default:
  //       throw new Error('No such input');
  //   }
  // };

  const onFormSubmit = () => {
    // console.log(evt);
    // evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: nameValue,
      number: numberValue,
    };

    handleNewContact(newContact);
    resetField('name');
    resetField('number');
    // setName('');
    // setNumber('');
  };

  render++;

  return (
    <FormBox onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
      <span>
        Render: <button>{render}</button>
      </span>
      <Label>
        <span>Name</span>
        <input
          placeholder="John"
          // onChange={onInputChange}
          value={nameValue}
          type="text"
          {...register('name', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/g,
              message:
                "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
            },
          })}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
        {errors.name?.message && <Error>{errors.name?.message}</Error>}
      </Label>
      <Label>
        <span>Number</span>
        <input
          placeholder="1234567890"
          // onChange={onInputChange}
          value={numberValue}
          {...register('number', {
            required: { value: true, message: 'This field is required' },
            pattern: {
              value:
                /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
              message:
                'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
            },
          })}
          type="tel"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
        />
        {errors.number?.message && <Error>{errors.number?.message}</Error>}
      </Label>
      <button type="submit">Add contact</button>
    </FormBox>
  );
};

ContactForm.propTypes = {
  handleNewContact: PropTypes.func.isRequired,
};
