import React from "react";
import "./scss/HeaderComponent.css";
import { useHistory } from "react-router-dom";

export const HeaderComponent = (props) => {
	const history = useHistory();

	const handleDrawerClick = (e) => {
		history.push(e);
	};

	return (
		<div
			className="header-container"
			{...props}
			onClick={handleDrawerClick.bind(this, props.route)}
		>
			<div className="header-item">
				{props.headeritem}
				<div className="line-container">
					<div className="left-line" />
					<div className="right-line" />
				</div>
			</div>
		</div>
	);
};
