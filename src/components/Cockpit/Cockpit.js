import React from "react";
import classes from "../../containers/App.module.css";

const cockpit = props => {
	const {
			text,
			textLength,
			showPerson,
			setShowPersonState,
			setInputTextState,
			setTextLengthState,
			showTimer,
			setShowTimer
	} = props;

	const togglePersonsHandler = () => {
		showPerson ?
			setShowPersonState({ showPerson: false })
			:
			setShowPersonState({ showPerson: true });
	}

	const toggleTimerHandler = () => {
		showTimer ? 
			setShowTimer({ showTimer: false })
			:
			setShowTimer({ showTimer: true });
	}

	const textLengthHandler = (e) => {
		setInputTextState({ text: e.target.value });
		setTextLengthState({ textLength: e.target.value.length });
	}

	let btnClass = "";

	if (showPerson) {
		btnClass = classes.Red;
	}

	return(
		<div>
			<h1>Uhan's React App</h1>
			<div>
					<input onChange={(event) => textLengthHandler(event)} value={text}/> 
			</div>
			<p>Input field Length: {textLength}</p>
			<button
					className={btnClass}
					onClick={() => togglePersonsHandler()}
			>
					Toggle Persons
			</button>
			<button
				className={btnClass}
				onClick={() => toggleTimerHandler()}
			>
				Toggle HIIT Timer
			</button>
		</div>
	);
}

export default cockpit;