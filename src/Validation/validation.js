import React from "react";
import classes from "./validation.module.css";

const validation = props => {
	const { textLength } = props;

	let assignedClasses = [classes.bold, classes.red]

  if (textLength >= 5) {
    assignedClasses.pop();
    assignedClasses.push(classes.green);
  }

	return (
		<div className={assignedClasses.join(" ")}>
			{
				textLength < 5 ? 
				(<p>Text too short</p>) 
				:
				(<p>Text long enough</p>)
			}
		</div>
	)
}

export default validation;
