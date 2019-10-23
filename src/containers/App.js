import React, { useState } from 'react';
import classes from './App.module.css';
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/persons"
import Characters from "../components/Characters/characters";
import Validation from "../components/Validation/validation";
import {
  // KINGA,
  // YUEHAN,
  person1,
  person2,
  person3
 } from "../utils/enums"

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
  const [ touchedState, setTouchedState ] = useState({ touched: true })

  const [ showPersonState, setShowPersonState ] = useState({ showPerson: false })

  const [ textLengthState, setTextLengthState ] = useState({ textLength: 0 })

  const [ inputTextState, setInputTextState ] = useState({ text: "" });

  // const switchNameHandler = (newName) => {
  //   if (touchedState) {
  //     setPersonState({
  //       persons: [
  //         { name: YUEHAN, age: 26 },
  //         { name: newName, age: 29 },
  //         { name: KINGA, age: 24}
  //       ]
  //     })
  //     setTouchedState({ touched: false })
  //   } else {
  //     setPersonState({
  //       persons: [
  //         { name: person1, age: 26 },
  //         { name: person2, age: 29 },
  //         { name: person3, age: 26}
  //       ]
  //     })
  //     setTouchedState({ touched: true })
  //   }
  // }

  return (
    <div className={classes.App}>
      <Cockpit
        showPerson={showPersonState.showPerson}
        setShowPersonState={setShowPersonState}
        textLength={textLengthState.textLength}
        text={inputTextState.text}
        setInputTextState={setInputTextState}
        setTextLengthState={setTextLengthState}
      />
      <Validation textLength={textLengthState.textLength}/>
      <Characters 
        text={inputTextState.text}
        setInputTextState={setInputTextState}
        setTextLengthState={setTextLengthState}  
      />
      <Persons 
        showPerson={showPersonState.showPerson}
        personList={personState.persons}
        setPersonState={setPersonState}
      />
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
