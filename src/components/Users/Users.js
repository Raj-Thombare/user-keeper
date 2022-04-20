// import UserList from './UserList';
import './Users.css'

const Users = (props) => {
    const usersArray = props.data;
    return (
        <div>
            <ul className="card">
                {
                    usersArray.map(user => {
                        
                    })
                }
            </ul>
        </div>
    );
}

export default Users;