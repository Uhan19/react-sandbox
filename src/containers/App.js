import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Cockpit from "../components/Cockpit/Cockpit"
import Persons from "../components/Persons/persons"
import Characters from "../components/Characters/characters";
import Validation from "../components/Validation/validation";
import { DisplayTime } from "../components/Timer/displayTime";
import { Countdown } from "../components/Timer/useTime";
import { DateTime } from "luxon";
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
  useEffect(() => {
    // console.log("useEffect App.js")
  }, [])

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

  const [ showCockpit, setShowCockpit] = useState(true);

  const [ isRunning, setIsRunning ] = useState(false);

  const [ startTimes, setStartTimes ] = useState([]);

  const [ stopTimes, setStopTimes ] = useState([]);


  const end = DateTime.local(2019, 11, 13, 12, 0);
  let start = DateTime.local();
  let elapsedTime = null;

  if (startTimes.length > 0 && stopTimes.length > 0) {
    for (let i = 0; i < stopTimes.length; i++) {
      elapsedTime ?
        elapsedTime = elapsedTime.plus(stopTimes[i].diff(startTimes[i]))
        :
        elapsedTime = stopTimes[i].diff(startTimes[i]);
    }
  }

  const handleClick = () => {
		if (isRunning) {
      setIsRunning(false);
      setStopTimes([...stopTimes, DateTime.local()]);
		} else {
      setIsRunning(true);
      setStartTimes([...startTimes, DateTime.local()]);
		}
	}

  return (
    <div className={classes.App}>
      <button
        onClick={() => {
          showCockpit ? setShowCockpit(false) : setShowCockpit(true)}}
      >
      Toggle Cockpit
      </button>
      {showCockpit && <Cockpit
        showPerson={showPersonState.showPerson}
        setShowPersonState={setShowPersonState}
        textLength={textLengthState.textLength}
        text={inputTextState.text}
        setInputTextState={setInputTextState}
        setTextLengthState={setTextLengthState}
      />}
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
      <button
				onClick={() => handleClick()}
			>
				toggle
			</button>
      <DisplayTime
        isRunning={isRunning}
        startTimes={startTimes}
        stopTimes={stopTimes}
        start={start}
        elapsedTime={elapsedTime}
      />
      <Countdown end={end} />
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Input Field"), React.createElement("input"))
}

export default app;
