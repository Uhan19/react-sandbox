import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";
import {
  KINGA,
  YUEHAN,
  person1,
  person2,
  person3
 } from "./utils/enums"

const app = props => {
  // useState always returns an array with exactly two elements
  // the first elemen tis the state, and the second is a function that allows
  // us to manipulate the state
  const [ personState, setPersonState ] = useState({
    persons: [
      { name: person1, age: 28 },
      { name: person2, age: 29 },
      { name: person3, age: 26}
    ]
  });

  // eslint-disable-next-line
  const [ touchedState, setTouchedState ] = useState(true)

  const switchNameHandler = () => {
    if (touchedState) {
      setPersonState({
        persons: [
          { name: YUEHAN, age: 26 },
          { name: person1, age: 29 },
          { name: KINGA, age: 24}
        ]
      })
      setTouchedState(false)
    } else {
      setPersonState({
        persons: [
          { name: person1, age: 28 },
          { name: person2, age: 29 },
          { name: person3, age: 26}
        ]
      })
      setTouchedState(true)
    }
  }

  console.log(personState, touchedState)

  return (
    <div className="App">
      <h1>Uhan's React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
        onClick={switchNameHandler}
      >
        the owner of this site
      </ Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      <Person />
      <Person>unknown person</ Person>
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
