import React from "react";
import { useTimer } from "./timer";
// import { DateTime } from "luxon";

export const DisplayTime = props => {
	const {
		isRunning,
		start,
		elapsedTime
	} = props;

	let formattedTime = "00:00:00";

	if (elapsedTime) {
		formattedTime = elapsedTime.toFormat("hh:mm:ss");
	}

	if (isRunning) {
		let timeNow = useTimer(1000, isRunning);
		let diff = timeNow.diff(start);

		if (elapsedTime && diff) {
			diff = timeNow.diff(start).plus(elapsedTime);
		}

		formattedTime = diff.toFormat("hh:mm:ss");
	}

	return (
		<div>
			{formattedTime}
		</div>
	)

}
