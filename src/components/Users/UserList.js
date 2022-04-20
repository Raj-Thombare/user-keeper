import './UserList.css'
import Card from '../UI/Card'

const UserList = ({username, age}) => {
    return (
        <Card className='list__content'>
            <div className='content_container'>
                <p className='content'>{username}{` (${age} years old)`}</p>
            </div>
        </Card>
    );
}

export default UserList;