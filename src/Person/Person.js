import React from "react";
import "./Person.css";
import { KINGA } from "../utils/enums";

const person = (props) => {
	const { name, age, onClick, change } = props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"
	const isKinga = name === KINGA ? "Yuehan's little helper" : null

  return (
		<div className="Person">
			<h1 onClick={onClick}>{personName} is {personAge} years old.</h1>
			<p>{props.children}</p>
			<p>{isKinga}</p>
			<input type="text" onChange={change} value={name} />
		</div>
	)
}

export default person;
