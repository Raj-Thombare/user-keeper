import React from "react";
import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import {useState} from 'react';

const dummy_users = [
  {
    id: 1,
    username: "Rakaa",
    age: 25,
  },
  {
    id: 2,
    username: "Raj",
    age: 20,
  },
  {
    id: 3,
    username: "Rohit",
    age: 34,
  },
];

function App() {

  const [userData, setUserData] = useState(dummy_users);
  
  const userDataHandler = (userData) => {
    setUserData((prevUser) => [userData, ...prevUser])
  }

  return (
    <div className="App">
      <NewUser onGetUserData={userDataHandler}/>
      <Users data={userData} />
    </div>
  );
}

export default App;
