import UserList from "./UserList";
import classes from'./Users.module.css'

const Users = (props) => {
  const usersArray = props.data;
  return (
    <ul className={classes.users_list}>
      {usersArray.map((user) => (
        <UserList key={user.id} username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default Users;
