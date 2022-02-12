import React from "react";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
	const navigate = useNavigate();

	const handleClick = () => {
		const response = axiosInstance.post("user/logout/blacklist", {
			refresh_token: localStorage.getItem("refresh_token"),
		});
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Authorization"] = null;
		console.log("Logged Out");
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
