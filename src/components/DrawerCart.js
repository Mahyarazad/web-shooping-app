import React from "react";
import "./scss/DrawerCart.css";
import { useHistory } from "react-router-dom";
export const DrawerCart = (props) => {
	const history = useHistory();

	const handleDrawerClick= e =>{
		props.onClick(e);
		history.push(e);
	}

	return (
		<div className="drawer-item" {...props} onClick={handleDrawerClick.bind(this, props.route)}>
			<p style={{fontSize: 30}}>{props.draweritem}</p>
		</div>
	);
};
