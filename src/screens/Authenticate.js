import React from "react";
import "./scss/Authenticate.css";
import {
	AiOutlineMail,
	AiFillLock,
	AiFillEye,
	AiFillEyeInvisible,
} from "react-icons/ai";
import { useWindowDimensions } from "../helper/ScreenSize";
import Colors from "../constants/Colors";
import backgroundGIF from "../constants/Grey.gif";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as authAction from "../store/actions/auth";

export const Authenticate = (props) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [seePassword, setSeePassword] = React.useState("password");
	const [errorMessage, setErrorMessage] = React.useState();
	const [disableButton, setDisableButton] = React.useState(false);
	const { width } = useWindowDimensions();
	const nextRef = React.useRef(null);
	const errorRef = React.useRef(null);
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	var history = useHistory();
	var location = useLocation();
	/// redirect from the same route
	var { from } = location.state || { from: { pathname: "/" } };
	const { pathname } = from;

	const handlePasswordVisibily = () => {
		seePassword === "password"
			? setSeePassword("text")
			: setSeePassword("password");
	};
	const handleLogin = React.useCallback(
		async (e) => {
			e.preventDefault();
			try {
				await dispatch(authAction.login(email, password));
			} catch (err) {
				setErrorMessage(err.message);

				// setDisableButton(false);
			}
		},
		[disableButton, errorMessage, dispatch]
	);

	const handleLogout = (e) => {
		e.preventDefault();
		try {
			dispatch(authAction.logout());
		} catch (err) {
			console.log(err);
		}
	};

	React.useEffect(() => {
		var timer;
		if (errorMessage) {
			console.log("=========================================================");
			errorRef.current.className = "notify-modal";
			timer = setTimeout(() => setErrorMessage(""), 2000);
		}
		return () => {
			clearTimeout(timer);
		};
	}, [errorMessage]);

	return (
		<div className="authenticate-body">
			{width < 700 && (
				<img
					className="overlay"
					src={backgroundGIF}
					alt="pleaselogin"
					loading="lazy"
				/>
			)}
			{errorMessage && (
				<div className="notify-modal-fast" ref={errorRef}>
					<p>
						Something went wrong: <b>{errorMessage}</b>
					</p>
				</div>
			)}
			{pathname !== "/" ? (
				<div className="notify-modal">
					<p>
						Please LOGIN to view this page: <b>{pathname.replace("/", "")}</b>
					</p>
				</div>
			) : (
				<></>
			)}
			{auth.auth ? (
				<>
					<div className="user-info-message">
						{`Welcome ${auth.email
							.slice(0, auth.email.search("@"))
							.toUpperCase()}`}
					</div>
					<div className="user-info">
						Registered E-mail: {auth.email}
					</div>
					<div className="user-info">Local ID: {auth.localId}</div>
					<button className="login-btn" onClick={handleLogout}>
						LOGOUT
					</button>
				</>
			) : (
				<form className="authenticate-body">
					<div className="inputContainer">
						<AiOutlineMail
							className="email-icon"
							size={width / 20}
							style={{ marginLeft: 10 }}
						/>
						<input
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail((prevState) => e.target.value)}
						/>
					</div>
					<div className="inputContainer">
						<AiFillLock
							className="password-icon"
							size={width / 20}
							style={{ marginLeft: 10 }}
						/>
						<input
							ref={nextRef}
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword((prevState) => e.target.value)}
							type={seePassword}
						/>
						{seePassword === "password" ? (
							<AiFillEye
								className="eye-icon"
								size={width / 20}
								style={{ marginRight: 10 }}
								color={Colors.primary}
								onClick={handlePasswordVisibily}
							/>
						) : (
							<AiFillEyeInvisible
								className="eye-icon"
								size={width / 20}
								style={{ marginRight: 10 }}
								color={Colors.primary}
								onClick={handlePasswordVisibily}
							/>
						)}
					</div>
					<button
						className="login-btn"
						onClick={handleLogin}
						disabled={disableButton}
					>
						LOGIN
					</button>
				</form>
			)}
		</div>
	);
};
