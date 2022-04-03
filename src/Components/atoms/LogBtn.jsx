import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import tailwindCommonClasses from "../../assets/commonClasses.tailwind";
import axiosInstance from "../../utils/axios";
import { useAuthStore } from "../../utils/store";
import Modal from "./Modal";

export default function LogBtn() {
	const navigate = useNavigate();
	// For Modal
	let isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	let setUserName = useAuthStore((state) => state.setUserName);
	let set_user_name = useAuthStore((state) => state.set_user_name);
	let setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

	// For Modal
	let [isOpen, setIsOpen] = useState(false);
	let [headerTextForModal, setHeaderTextForModal] = useState("");
	let [bodyTextForModal, setBodyTextForModal] = useState("");

	const handleClick = () => {
		// getting from the store
		// axiosInstance
		// 	.post("user/logout/blacklist", {
		// 		refresh_token: localStorage.getItem("refresh_token"),
		// 	})
		// 	.then((res) => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		localStorage.removeItem("userName");
		localStorage.removeItem("userId");
		axiosInstance.defaults.headers["Authorization"] = null;
		console.log("Logged Out");
		setIsOpen(true);
		setUserName("");
		set_user_name("");
		setHeaderTextForModal("Logged Out Successfully ✅");
		setBodyTextForModal(
			`You can log in to the system again using the login page🙂`
		);
		setIsLoggedIn(false);
		navigate("/");
		// });
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				headerText={headerTextForModal}
				bodyText={bodyTextForModal}
			/>
			{isLoggedIn ? (
				<>
					<button
						className={tailwindCommonClasses.smallButtonFocus}
						style={{ marginLeft: "10px" }}
						onClick={() => {
							setIsOpen(true);
							handleClick();
						}}
					>
						LOG OUT
					</button>
				</>
			) : (
				<Link to="/login" className={tailwindCommonClasses.smallButtonFocus}>
					LOG IN
				</Link>
			)}
		</>
	);
}
