import User from '../User/User';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    {users.map((user) => (
      <User
        key={user.id}
        user={user}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    ))}
  </>
);

export default UserList;
