import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = props => {
	const { showPerson, personList, deletePersonHandler, nameChangedHandler } = props;
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