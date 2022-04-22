import React, { useState, Fragment } from "react";
import "./App.css";
import NewUser from "./components/Users/NewUser";
import Users from "./components/Users/Users";

const dummy_users = [];

function App() {
  const [userData, setUserData] = useState(dummy_users);

  const userDataHandler = (userData) => {
    setUserData((prevUser) => [userData, ...prevUser]);
  };

  return (
    <>
      <NewUser onGetUserData={userDataHandler} />
      <Users data={userData} />
    </>
  );
}

export default App;
