import React from "react";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import useStore from "../../utils/store";

export default function Logout() {
	const navigate = useNavigate();
	const setUserName = useStore((state) => state.setUserName);
	const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);

	const handleClick = () => {
		// getting from the store
		const response = axiosInstance.post("user/logout/blacklist", {
			refresh_token: localStorage.getItem("refresh_token"),
		});
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Authorization"] = null;
		console.log("Logged Out");
		setUserName("");
		setIsLoggedIn(false);
		navigate("/login");
		// toast.success("🙂 Logout Succesful", {
		// 	position: "top-right",
		// 	autoClose: 4000,
		// 	hideProgressBar: false,
		// 	closeOnClick: true,
		// 	pauseOnHover: true,
		// 	draggable: true,
		// 	progress: undefined,
		// });
		alert("Logout Successfull");
	};

	return (
		<button
			className={tailwindCommonClasses.smallButtonFocus}
			style={{ marginLeft: "10px" }}
			onClick={handleClick}
		>
			LOG OUT
		</button>
	);
}
