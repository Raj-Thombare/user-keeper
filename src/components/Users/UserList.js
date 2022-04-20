import classes from './UserList.module.css'
import Card from '../UI/Card'

const UserList = ({username, age}) => {
    return (
        <Card className={classes.list__content}>
            <div className={classes.content_container}>
                <p className={classes.content}>{username}{` (${age} years old)`}</p>
            </div>
        </Card>
    );
}

export default UserList;