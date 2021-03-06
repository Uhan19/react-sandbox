import React, { Component } from "react";
import classes from "./Person.module.css";
import { KINGA } from "../../../utils/enums";

class Person extends Component {

	render() {
	// artifically generate errors
	// const rnd = Math.random();

	// if(rnd > 0.7) {
	// 	throw new Error("something went wrong");
	// }
	const { name, age, onClick, change } = this.props
	const personName = name ? name : "John Doe";
	const personAge = age ? age : "0"
	const isKinga = name === KINGA ? "Yuehan's little helper" : null;

	return (
	
			<div className={classes.Person}>
				<h1 onClick={onClick}>{personName} is {personAge} years old.</h1>
				<p>{this.props.children}</p>
				<p>{isKinga}</p>
				<input type="text" onChange={change} value={name} />
			</div>
		)
	}
}

export default Person;
