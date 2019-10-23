import React from "react";

const characters = props => {
	const { 
		text,
		setInputTextState,
		setTextLengthState
	} = props
	const textArr = text.split("");

	const style = {
		display: "inline-block",
		padding: "16px",
		textAlign: "center",
		margin: "16px",
		border: "1px solid black"
	}

	const handleCharDel = (index) => {
		if (!index) {
		  const newText = text.slice(1);
		  setInputTextState({ text: newText});
		  setTextLengthState({ textLength: newText.length });
		} else {
		  const newText = text.slice(0, index) + text.slice(index+1);
		  setInputTextState({ text: newText });
		  setTextLengthState({ textLength: newText.length });
		}
	}

	return (
		<div>
		{textArr.map((char, index) => {
			return (
				<p 
					key={index} 
					style={style}
					onClick={() => handleCharDel(index)}
				>
					{char}
				</p>)
		})}
		</div>
	)
} 

export default characters; 
