import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { auth } = useSelector((state) => state.auth);
	return (
		<Route
			{...rest}
			render={(props) =>
				auth ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: "/authenticate", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};
