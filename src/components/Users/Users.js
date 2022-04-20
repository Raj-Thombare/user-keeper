import UserList from "./UserList";
import './Users.module.css'

const Users = (props) => {
  const usersArray = props.data;
  return (
    <ul className="users-list">
      {usersArray.map((user) => (
        <UserList key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default Users;
