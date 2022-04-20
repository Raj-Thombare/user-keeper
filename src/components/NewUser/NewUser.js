import './NewUser.css'
import Card from '../UI/Card'
import {useState} from 'react'

const NewUser = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const getUserNameHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const getUserAgeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    const newUserData = {
      id:Math.random().toString(),
      username:enteredName,
      age:enteredAge
    }
    props.onGetUserData(newUserData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Card className="form_container">
          <div>
            <label>Username</label>
            <input type="text" onChange={getUserNameHandler} />
          </div>
          <div>
            <label>Age (years)</label>
            <input type="number" onChange={getUserAgeHandler}/>
          </div>
          <div>
            <button type="submit">Add User</button>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default NewUser;
