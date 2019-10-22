import React from "react";

export const Validation = props => {
	const { textLength } = props;

	let classes = ["bold", "red"]

  if (textLength >= 5) {
    classes.pop();
    classes.push("green");
  }

	return (
		<div className={classes.join(" ")}>
			{
				textLength < 5 ? 
				(<p>Text too short</p>) 
				:
				(<p>Text long enough</p>)
			}
		</div>
	)
}
