import React from 'react';
import "./App.css";
import NewUser from './components/NewUser/NewUser'
import Users from './components/Users/Users'

const userData = [{
  id:1,
  username:'Rakaa',
  age:25
},
{
  id:2,
  username:'Raj',
  age:20
},
{
  id:3,
  username:'Rohit',
  age:34
}];

function App() {
  return (
    <div className="App">
      <NewUser/>
      <Users data={userData}/>
    </div>
  );
}

export default App;
