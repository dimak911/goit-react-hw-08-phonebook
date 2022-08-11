export const Contacts = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, id }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);
