import React, { useState } from 'react';
import classes from './App.module.css';
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/persons"
import Characters from "../components/Characters/characters";
import Validation from "../components/Validation/validation";
import Timer from "../components/Timer/timer";
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

  const [ showPersonState, setShowPersonState ] = useState({ showPerson: false })

  const [ textLengthState, setTextLengthState ] = useState({ textLength: 0 })

  const [ inputTextState, setInputTextState ] = useState({ text: "" });

  const [ showTimer, setShowTimer ] = useState({ showTimer: false });

  const [ time, setTime ] = useState({ time: 0 });

	const [ cycle, setCycle ] = useState({ cycle: 1})

  return (
    <div className={classes.App}>
      <Cockpit
        showPerson={showPersonState.showPerson}
        setShowPersonState={setShowPersonState}
        textLength={textLengthState.textLength}
        text={inputTextState.text}
        setInputTextState={setInputTextState}
        setTextLengthState={setTextLengthState}
        showTimer={showTimer.showTimer}
        setShowTimer={setShowTimer}
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
      <Timer
        showTimer={showTimer.showTimer}
        time={time.time}
        setTime={setTime}
        cycle={cycle.cycle}
        setCycle={setCycle}
      />
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
