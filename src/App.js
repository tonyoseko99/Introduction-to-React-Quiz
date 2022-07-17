import React from "react";
import logo from './logo.svg';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function App() {
  const [] = React.useState(true);
  return (
    
    <>
    <img src={logo} className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
    </>
  );
}

export default App;
