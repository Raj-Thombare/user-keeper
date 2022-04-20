import React from "react";
import "./App.css";
import NewUser from "./components/Users/NewUser";
import Users from "./components/Users/Users";
import { useState } from "react";

const dummy_users = [];

function App() {
  const [userData, setUserData] = useState(dummy_users);

  const userDataHandler = (userData) => {
    setUserData((prevUser) => [userData, ...prevUser]);
  };

  return (
    <div className="App">
      <NewUser onGetUserData={userDataHandler} />
      <Users data={userData} />
    </div>
  );
}

export default App;
