import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {

	// static getDerivedStateFromProps(props, state) {
	// 	console.log("Persons.js getDrerivedStateFromProps")
	// 	return state;
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Persons.js shouldcomponentupdate");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("Persons.js getSnapshotBeforeUpdate")
		return { message: "Snapshot!"}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log("Persons.js componentDidUpdate")
		console.log(snapshot)
	}

	nameChangedHandler = (e, index, personList, setPersonState) => {
    // can also use Object.assign() to create a copy
		// Object.assign({}, personState.persons[index])
    const person = {...personList[index]}
    person.name = e.target.value
    const persons = [...personList]
    persons[index] = person
    setPersonState({ persons: persons})
	}
	
	deletePersonHandler = (index, personList, setPersonState) => {
    const persons = [...personList]
    persons.splice(index, 1);
    setPersonState({ persons: persons })
	}

	render () {
		console.log("Persons.js rendering")
	const {
		showPerson,
		personList,
		setPersonState
	} = this.props;
	
	if (showPerson) {
			return (
				<div>
				{personList.map((person, index) => {
					return (
						<ErrorBoundary key={index}>
							<Person
								onClick={() => this.deletePersonHandler(index, personList, setPersonState)}
								name={person.name}
								age={person.age}
								change={(event) => this.nameChangedHandler(event, index, personList, setPersonState)}
							/>
						</ErrorBoundary>)
					})}
			</div>)
	} 
	return null;
	}
}

export default Persons;