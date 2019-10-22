import React from "react";
import "./Person.css";
import { KINGA } from "../utils/enums";
import Radium from "radium";

const person = (props) => {
	const { name, age, onClick, change } = props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"
	const isKinga = name === KINGA ? "Yuehan's little helper" : null;
	const style = {
		"@media (min-width: 500px)": {
			width: "450px"
		}
	}

  return (
		<div className="Person" style={style}>
			<h1 onClick={onClick}>{personName} is {personAge} years old.</h1>
			<p>{props.children}</p>
			<p>{isKinga}</p>
			<input type="text" onChange={change} value={name} />
		</div>
	)
}

export default Radium(person);
