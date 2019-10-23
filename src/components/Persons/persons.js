import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = props => {
	const {
		showPerson,
		personList,
		setPersonState
	} = props;

	const nameChangedHandler = (e, index) => {
    // can also use Object.assign() to create a copy
    // Object.assign({}, personState.persons[index])
    const person = {...personList[index]}
    person.name = e.target.value
    const persons = [...personList]
    persons[index] = person
    setPersonState({ persons: persons})
  }

  const deletePersonHandler = (index) => {
    const persons = [...personList]
    persons.splice(index, 1);
    setPersonState({ persons: persons })
	}
	
	if (showPerson) {
			return (
				<div>
				{
					personList.map((person, index) => {
						return (
							<ErrorBoundary key={index}>
								<Person
									onClick={() => deletePersonHandler(index)}
									name={person.name}
									age={person.age}
									change={(event) => nameChangedHandler(event, index)}
								/>
							</ErrorBoundary>)
					})
				}
			</div>)
	} 
	return null;
}

export default persons;