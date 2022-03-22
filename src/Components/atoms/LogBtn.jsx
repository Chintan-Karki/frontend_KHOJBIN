import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import axiosInstance from "../../utils/axios";
import { useAuthStore } from "../../utils/store";

export default function LogBtn() {
	const navigate = useNavigate();

	let isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	let setUserName = useAuthStore((state) => state.setUserName);
	let setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

	const handleClick = () => {
		// getting from the store
		axiosInstance
			.post("user/logout/blacklist", {
				refresh_token: localStorage.getItem("refresh_token"),
			})
			.then((res) => {
				localStorage.removeItem("access_token");
				localStorage.removeItem("refresh_token");
				localStorage.removeItem("userName");
				localStorage.removeItem("userId");
				axiosInstance.defaults.headers["Authorization"] = null;
				console.log("Logged Out", res);
				setUserName("");
				setIsLoggedIn(false);
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

				navigate("/login");
			});
	};

	return isLoggedIn ? (
		<>
			<button
				className={tailwindCommonClasses.smallButtonFocus}
				style={{ marginLeft: "10px" }}
				onClick={() => {
					handleClick();
				}}
			>
				LOG OUT
			</button>
		</>
	) : (
		<Link to="/login" className={tailwindCommonClasses.smallButtonFocus }>
			LOG IN
		</Link>
	);
}
