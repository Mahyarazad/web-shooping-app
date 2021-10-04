import React from "react";
import "./scss/LandingScreen.css";
import AnimatedMenuCSS from "../components/AnimatedMenuCSS";
import { DrawerCart } from "../components/DrawerCart";
import { useWindowDimensions } from "../helper/ScreenSize";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import { Authenticate } from "./Authenticate";
import { Users } from "./Users";
import { About } from "./About";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer, closeDrawer } from "../store/actions/drawer";
import { ProtectedRoute } from "../helper/ProtectedRoute";

export const LandingScreen = (props) => {
	const [drawerState, setDrawerState] = React.useState("drawer-inactive");
	const ScreenSize = useWindowDimensions();
	const drawer = useSelector((state) => state.drawer.drawer);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(toggleDrawer());
		if (drawer) setDrawerState("drawer-active");
		if (!drawer) setDrawerState("drawer-inactive");
	};

	const handleDrawerClick = () => {
		dispatch(toggleDrawer());
		setDrawerState("drawer-inactive");
	};

	React.useEffect(() => {
		handleClick();
	}, []);

	return (
		<Router>
			<Switch>
				<Route>
					<div className="container">
						<div className={drawerState}>
							{ScreenSize.width < 700 && (
								<React.Fragment>
									<DrawerCart
										draweritem="Authenticate"
										route="/authenticate"
										onClick={handleDrawerClick}
									/>
									<DrawerCart
										draweritem="Products"
										route="/products"
										onClick={handleDrawerClick}
									/>
									<DrawerCart
										draweritem="About Me"
										route="/aboutme"
										onClick={handleDrawerClick}
									/>
								</React.Fragment>
							)}
						</div>
						<Route>
							<div className="header">
								<div onClick={handleClick}>
									<AnimatedMenuCSS />
								</div>
							</div>
						</Route>
						<Route>
							<div className="aside">
								<p>aside</p>
							</div>
						</Route>

						<Route path="/aboutme" component={About} />
						<ProtectedRoute path="/products" component={Users} />  
						<Route path="/authenticate" component={Authenticate} />
						<Route>
							<div className="footer">
								<p>footer</p>
							</div>
						</Route>
					</div>
				</Route>
			</Switch>
		</Router>
	);
};
