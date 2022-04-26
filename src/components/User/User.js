import { useState } from 'react';

const User = ({ user, deleteUser, updateUser }) => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);

  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleDeleteUser = () => {
    deleteUser(user.id);
  };

  const handleUpdateUser = () => {
    updateUser({ email, firstName, lastName, id: user.id });
  };

  const close = () => <>{user.email}</>;
  const open = () => (
    <>
      <input
        id="email"
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <br />
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={({ target }) => setFirstName(target.value)}
      />
      <br />
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={({ target }) => setLastName(target.value)}
      />
      <button onClick={handleDeleteUser}>delete</button>
      <button onClick={handleUpdateUser}>update</button>
      <button onClick={handleVisibility}>close</button>
    </>
  );

  return (
    <>
      <div onClick={handleVisibility}>{!visible && close()}</div>
      {visible && open()}
    </>
  );
};

export default User;
