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

export const Authenticate = (props) => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [seePassword, setSeePassword] = React.useState("password");
	const { width } = useWindowDimensions();
	const nextRef = React.useRef(null);
	var history = useHistory();
	var location = useLocation();
	/// redirect from the same route
	var { from } = location.state || { from: { pathname: "/" } };
	const { pathname } = from;
	console.log(from);

	const handlePasswordVisibily = () => {
		seePassword === "password"
			? setSeePassword("text")
			: setSeePassword("password");
	};

	const handleClick = (e) => {
		console.log(e);
		e.preventDefault();
		console.log(password);
	};

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
			{pathname !== "/" ? (
				<div className="notify-modal">
					<p>
						Please LOGIN to view this page: <b>{pathname.replace("/", "")}</b>
					</p>
				</div>
			) : (
				<></>
			)}

			<form className="authenticate-body">
				<div className="inputContainer">
					<AiOutlineMail size={width / 20} style={{ marginLeft: 10 }} />
					<input
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail((prevState) => e.target.value)}
					/>
				</div>
				<div className="inputContainer">
					<AiFillLock size={width / 20} style={{ marginLeft: 10 }} />
					<input
						ref={nextRef}
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword((prevState) => e.target.value)}
						type={seePassword}
					/>
					{seePassword === "password" ? (
						<AiFillEye
							size={width / 20}
							style={{ marginRight: 10 }}
							color={Colors.primary}
							onClick={handlePasswordVisibily}
						/>
					) : (
						<AiFillEyeInvisible
							size={width / 20}
							style={{ marginRight: 10 }}
							color={Colors.primary}
							onClick={handlePasswordVisibily}
						/>
					)}
				</div>
				<button onSubmit={handleClick}>LOGIN</button>
			</form>
		</div>
	);
};
