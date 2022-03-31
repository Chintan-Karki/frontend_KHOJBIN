import React from "react";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useAuthStore } from "../../utils/store";
import { toast } from "react-toastify";

export default function Logout() {
	const navigate = useNavigate();
	const setUserName = useAuthStore((state) => state.setUserName);
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

	const handleClick = async () => {
		// getting from the store

		// const response = axiosInstance.post("user/logout/blacklist", {
		// 	refresh_token: localStorage.getItem("refresh_token"),
		// });
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Authorization"] = null;
		await setUserName("");
		await setIsLoggedIn(false);
		navigate("/login");
		toast("Logged Out Successfull", {
			type: "dark",
			progressClassName: "fancy-progress-bar",
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
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
