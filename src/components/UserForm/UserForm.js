import { useState } from 'react';

const UserForm = ({ createUser }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUserCreation = (event) => {
    event.preventDefault();
    createUser({ email, firstName, lastName });
    setEmail('');
    setFirstName('');
    setLastName('');
  };

  return (
    <>
      <h2>Create user</h2>
      <form onSubmit={handleUserCreation} id="form">
        email
        <input
          id="title"
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <br />
        first name
        <input
          id="author"
          type="text"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <br />
        last name
        <input
          id="url"
          type="text"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default UserForm;
