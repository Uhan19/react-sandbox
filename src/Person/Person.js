import React from "react";

const Person = (props) => {
	const { name, age } = props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"

  return (
		<div>
			<h1 className="person">{personName} is {personAge} years old.</h1>
			<p>{props.children}</p>
		</div>
	)
}

export default Person;