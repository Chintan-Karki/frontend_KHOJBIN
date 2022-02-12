import React from "react";
import { Link, useNavigate } from "react-router-dom";

import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import axiosInstance from "../../utils/axios";
import useStore from "../../utils/store";

export default function LogBtn() {
	const navigate = useNavigate();

	// const handleClick = () => {
	// getting from the store
	// 	const response = axiosInstance.post("user/logout/blacklist", {
	// 		refresh_token: localStorage.getItem("refresh_token"),
	// 	});
	// 	localStorage.removeItem("access_token");
	// 	localStorage.removeItem("refresh_token");
	// 	axiosInstance.defaults.headers["Authorization"] = null;
	// 	console.log("Logged Out");
	// 	setUserName("");
	// 	setIsLoggedIn(false);
	// 	navigate("/login");
	// 	alert("Logout Successfull");
	// };
	let isLoggedIn = useStore((state) => state.isLoggedIn);
	let setUserName = useStore((state) => state.setUserName);
	let setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

	// useEffect(() => {
	// isLoggedIn = !isLoggedIn;
	// 	console.log("reload");
	// }, [setIsLoggedIn, isLoggedIn]);

	const handleClick = () => {
		// getting from the store
		axiosInstance.post("user/logout/blacklist", {
			refresh_token: localStorage.getItem("refresh_token"),
		});
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Authorization"] = null;
		setUserName("");
		setIsLoggedIn(false);
		console.log("Logged Out");

		navigate("/login");
		alert("Logout Successfull");
	};

	return isLoggedIn ? (
		<button
			className={tailwindCommonClasses.smallButtonFocus}
			style={{ marginLeft: "10px" }}
			onClick={() => {
				handleClick();
			}}
		>
			LOG OUT
		</button>
	) : (
		<Link to="/login" className={tailwindCommonClasses.smallButtonFocus}>
			LOG IN
		</Link>
	);
}
