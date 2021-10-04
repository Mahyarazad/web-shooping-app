import React from "react";
import "./scss/AnimatedMenuCSS.css";
import { useSelector } from "react-redux";

const AnimatedMenuCSS = (props, ref) => {

	const {hamburgerState} = useSelector((state) => state.drawer);

	return (
		<div className="animated-dots">
			<div className={hamburgerState.lineOne} />
			<div className={hamburgerState.lineTwo} />
			<div className={hamburgerState.lineThree} />
		</div>
	);
};

export default AnimatedMenuCSS;
