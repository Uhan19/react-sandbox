import React from "react";
import classes from "./Person.module.css";
import { KINGA } from "../../../utils/enums";

const person = (props) => {
	const { name, age, onClick, change } = props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"
	const isKinga = name === KINGA ? "Yuehan's little helper" : null;

	// artifically generate errors
	// const rnd = Math.random();

	// if(rnd > 0.7) {
	// 	throw new Error("something went wrong");
	// }

  return (

		<div className={classes.Person}>
			<h1 onClick={onClick}>{personName} is {personAge} years old.</h1>
			<p>{props.children}</p>
			<p>{isKinga}</p>
			<input type="text" onChange={change} value={name} />
		</div>
	)
}

export default person;
