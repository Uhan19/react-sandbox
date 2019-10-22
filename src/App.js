import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";
import Characters from "./Characters/characters"
import { Validation } from "./utils/validation";
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
    backgroundColor: "green",
    color: "white",
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

  const [ textLengthState, setTextLengthState ] = useState({ textLength: 0 })

  const [ inputTextState, setInputTextState ] = useState({ text: "" });

  // eslint-disable-next-line
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

  const textLengthHandler = (e) => {
    setInputTextState({ text: e.target.value });
    setTextLengthState({ textLength: e.target.value.length });
  }

  const handleCharDel = (index) => {
    const text = inputTextState.text;
    if (!index) {
      const newText = text.slice(1);
      setInputTextState({ text: newText});
      setTextLengthState({ textLength: newText.length });
    } else {
      const newText = text.slice(0, index) + text.slice(index+1);
      setInputTextState({ text: newText });
      setTextLengthState({ textLength: newText.length });
    }
  }

  const persons = () => {
    if (showPersonState.showPerson) {
      style.backgroundColor = "red";
      return (
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
  }

  return (
    <div className="App">
      <h1>Uhan's React App</h1>
      <div>
        <input onChange={() => textLengthHandler(event)} value={inputTextState.text}/> 
      </div>
      <p>Input field Length: {textLengthState.textLength}</p>
      <Validation textLength={textLengthState.textLength}/>
      <Characters text={inputTextState.text} deleteChar={handleCharDel}/>
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
