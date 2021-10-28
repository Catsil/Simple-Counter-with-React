import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const Counter = props => {
	const [cont, setCont] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			if (cont < 9) {
				setCont(cont + 1);
			} else {
				setCont(0);
			}
		}, props.time);
		return () => clearInterval(timer);
	}, [cont]);
	return (
		<div className="container">
			<div className="number">{cont}</div>
		</div>
	);
};
Counter.propTypes = {
	time: PropTypes.number
};

export default Counter;
