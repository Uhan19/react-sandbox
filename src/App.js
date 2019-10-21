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
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  }

  const [ personState, setPersonState ] = useState({
    persons: [
      { name: person1, age: 28 },
      { name: person2, age: 29 },
      { name: person3, age: 26}
    ]
  });

  // eslint-disable-next-line
  const [ touchedState, setTouchedState ] = useState({ touched: true })

  const [ showPersonState, setShowPersonState ] = useState({ showPerson: false })

  const switchNameHandler = (newName) => {
    if (touchedState) {
      setPersonState({
        persons: [
          { name: YUEHAN, age: 26 },
          { name: newName, age: 29 },
          { name: KINGA, age: 24}
        ]
      })
      setTouchedState({ touched: false })
    } else {
      setPersonState({
        persons: [
          { name: person1, age: 26 },
          { name: person2, age: 29 },
          { name: person3, age: 26}
        ]
      })
      setTouchedState({ touched: true })
    }
  }

  const nameChangedHandler = (e, index) => {
    // can also use Object.assign() to create a copy
    // Object.assign({}, personState.persons[index])
    const person = {...personState.persons[index]}
    person.name = e.target.value
    const persons = [...personState.persons]
    persons[index] = person
    setPersonState({ persons: persons})
  }

  const togglePersonsHandler = () => {
    showPersonState.showPerson ?
      setShowPersonState({ showPerson: false })
      :
      setShowPersonState({ showPerson: true });
  }

  const deletePersonHandler = (index) => {
    const persons = [...personState.persons]
    persons.splice(index, 1);
    setPersonState({ persons: persons })
  }

  const persons = () => {
    return showPersonState.showPerson && (
      <div>
        {
          personState.persons.map((person, index) => {
            return (
              <Person
                key={index}
                onClick={() => deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                change={() => nameChangedHandler(event, index)}
              />)
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Uhan's React App</h1>
      <button
        style={style}
        onClick={() => togglePersonsHandler()}
      >
        Toggle Persons
      </button>
      {persons()}
      </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
