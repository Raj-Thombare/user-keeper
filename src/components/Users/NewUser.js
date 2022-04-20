import "./NewUser.css";
import Card from "../UI/Card";
import { useState } from "react";
import Button from '../UI/Button'

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const getUserNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const getUserAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newUserData = {
      id: Math.random().toString(),
      username: enteredName,
      age: enteredAge,
    };
    props.onGetUserData(newUserData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <div>
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
