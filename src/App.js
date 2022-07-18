import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Header";

/**
  Challenge: Display all users to the browser
**/

function UserList(){
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  return users.map((user)=><ul><li>{user.name}</li></ul>)
  
}



// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}

  //  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
// Uncomment this to tackle quiz


// Comment out after completion
function Parent() {
  
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {
  const [] = React.useState(true);
  
  return (
    
    <>
    <Header />
    <img src={logo} className="App-logo" alt="logo" />
    
      <h3>User names</h3>
      <UserList />
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
