import React, { useState, useEffect } from "react";
import classes from "./time.module.css";

const timer = props => {
	const {
		showTimer,
		cycle,
		setCycle,
		time,
		setTime
	} = props;

	let isRest = true;

	const [ timerClass, setTimerClass ] = useState({ class: classes.timerRed });

	const startTimer = () => {
		let newTime = 0;
		let newCycle = cycle
		const hiitCounter = () => {
			newTime++;
			setTime({ time: newTime });
			if (newTime === 5 && isRest) {
				newTime = 0; 
				newCycle++;
				setTime({ time: newTime });
				setCycle({ cycle: newCycle});
				setTimerClass({ class: classes.timerGreen });
				isRest=false;
			}
			if (newTime === 2 && !isRest) {
				newTime = 0;
				setTime({ time: newTime });
				setTimerClass({ class: classes.timerRed });
				isRest=true;
			}
			if (newCycle === 3) {
				newCycle=0;
				setCycle({ cycle: newCycle });
				clearInterval(timerInterval);
			}
		}
		const timerInterval = setInterval(hiitCounter, 1000);
	}

	if (showTimer) {
		return (
			<div>
				<button
					onClick={() => startTimer()}
				>
					Start timer
				</ button>
				<div className={timerClass.class}>
					{time}
				</div>
			</div>
		)
	}
	return null;
}

export default timer;