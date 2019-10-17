import React from "react";
import { KINGA } from "../utils/enums";

const Person = (props) => {
	const { name, age, onClick } = props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"
	const isKinga = name === KINGA ? "Yuehan's little helper" : null

  return (
		<div>
			<h1 className="person">{personName} is {personAge} years old.</h1>
			<p onClick={onClick}>{props.children}</p>
			<p>{isKinga}</p>
		</div>
	)
}

export default Person;