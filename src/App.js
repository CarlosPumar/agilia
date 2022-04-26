import { useState, useEffect } from 'react';
import usersService from './services/users';
import UserList from './components/UserList/UserList';
import ButtonList from './components/ButtonList/ButtonList';
import UserForm from './components/UserForm/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  const getUsers = async (page) => {
    const pageData = await usersService.getPage(page);
    setUsers(pageData.data);
    setData(pageData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleClick = (event) => {
    getUsers(event.target.id);
  };

  const createUser = async ({ email, firstName, lastName }) => {
    const newUser = await usersService.post({
      email,
      first_name: firstName,
      last_name: lastName,
    });
    const newUsers = users.concat(newUser);
    setUsers(newUsers);
  };

  const updateUser = async ({ email, firstName, lastName, id }) => {
    const newUser = await usersService.put({
      email,
      first_name: firstName,
      last_name: lastName,
      id,
    });
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return newUser;
      }
      return user;
    });
    setUsers(newUsers);
  };

  const deleteUser = async (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    await usersService.remove(id);
    setUsers(newUsers);
  };

  return (
    <>
      <UserForm createUser={createUser} />
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
      <ButtonList length={data.total_pages} handleClick={handleClick} />
    </>
  );
}

export default App;
