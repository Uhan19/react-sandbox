import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {
  // useState always returns an array with exactly two elements
  // the first elemen tis the state, and the second is a function that allows
  // us to manipulate the state
  const [ personState, setPersonState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26}
    ]
  });

  const [ otherState, setOtherState ] = useState("some other value")

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Yuehan", age: 26 },
        { name: "Manu", age: 29 },
        { name: "Kinga", age: 24}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Uhan's React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      <Person />
      <Person>unknown person</ Person>
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
