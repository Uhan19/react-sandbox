import React from "react";

export const Validation = props => {
	const { textLength } = props;

	return (
		<div>
			{
				textLength < 5 ? 
				(<p>Text too short</p>) 
				:
				(<p>Text long enough</p>)
			}
		</div>
	)
}
