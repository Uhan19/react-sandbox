import React from "react";

const characters = props => {
	const { text, deleteChar } = props
	const textArr = text.split("");

	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	}

	return (
		<div>
		{textArr.map((char, index) => {
			return (
				<p 
					key={index} 
					style={style}
					onClick={() => deleteChar(index)}
				>
					{char}
				</p>)
		})}
		</div>
		// <div>test</div>
	)
} 

export default characters; 
