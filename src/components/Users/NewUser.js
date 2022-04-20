import "./NewUser.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const getUserNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const getUserAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid Input',
        message:'Please enter valid name and age (non-empty values).'
      })
      return;
    }

    if(enteredAge < 1){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age!( > 1).'
      })
    }
    
    const newUserData = {
      id: Math.random().toString(),
      username: enteredName,
      age: enteredAge,
    };
    props.onGetUserData(newUserData);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <form onSubmit={submitHandler}>
        <div className="card_container">
          <Card className="form_container">
            <div className="input_container">
              <label>Username</label>
              <input
                type="text"
                value={enteredName}
                onChange={getUserNameHandler}
              />
            </div>
            <div className="input_container">
              <label>Age (years)</label>
              <input
                type="number"
                value={enteredAge}
                onChange={getUserAgeHandler}
              />
            </div>
            <div className="input_container">
              <Button type="submit">Add User</Button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
