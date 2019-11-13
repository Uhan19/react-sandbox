import { useEffect, useState } from "react";
import { DateTime } from 'luxon';

export const useTimer = (refresh, isRunning) => {
	const [now, setNow] = useState(getTime());
  useEffect(() => {
		console.log("rendered in timer")
		let interval;
		if(isRunning) {
			interval = setInterval(
			() => setNow(getTime()),
			refresh,
			);
		}
		return () => clearInterval(interval);
	}, [isRunning, refresh, getTime, setNow, setInterval, clearInterval])


	if (isRunning) {
		return now;
	}
	return null;
}

const getTime = () => {
	return DateTime.local();
}
