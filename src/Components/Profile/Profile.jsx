import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios/axios";
import WishedItems from "../WishList/WishedItems";
import loaderGif from "../../assets/images/loaderGif2.gif";
import { useAuthStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import SessionExpired from "../Modals/SessionExpired";
import SellerRankSetter from "../atoms/SellerRankSetter";

export default function Profile() {
	let [userDetails, setUserDetails] = useState({});
	let [loading, setLoading] = useState(true);

	let [isErrorOpen, setIsErrorOpen] = useState(false);

	let navigate = useNavigate();
	let setUserName = useAuthStore((state) => state.setUserName);
	let set_user_name = useAuthStore((state) => state.set_user_name);
	let setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

	useEffect(() => {
		axiosInstance
			.get("/user")
			.then((res) => {
				// console.log(res.data);
				setUserDetails(res.data);
				setLoading(false);
			})
			.catch((err) => {
				localStorage.removeItem("access_token");
				localStorage.removeItem("userName");
				localStorage.removeItem("refresh_token");
				localStorage.removeItem("userId");
				axiosInstance.defaults.headers["Authorization"] = null;
				setLoading(false);
				setUserName("");
				set_user_name("");
				setIsLoggedIn(false);
				setIsErrorOpen(true);
			});
	}, [navigate, setIsLoggedIn, setUserName, set_user_name]);

	return (
		<>
			<SessionExpired isOpen={isErrorOpen} setIsOpen={setIsErrorOpen} />

			<section className=" py-1  ">
				<div className="w-full container px-4 mx-auto mt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-100 border-0 bg-white/60">
						<div className="rounded-t-xl bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between items-center">
								<h6 className="text-indigo-800  h-auto p-2  text-xl font-extrabold sm:ml-4">
									My account
								</h6>
								<img
									alt="test"
									src="https://avatars.dicebear.com/api/bottts/test.svg"
									className="rounded-full w-12 h-auto sm:mr-10"
								/>
							</div>
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							{loading ? (
								<div className="flex h-20 items-center justify-center">
									<img src={loaderGif} alt="loading..." className="h-48" />
								</div>
							) : (
								<form>
									<div className="px-4 my-6 ">
										<h6 className="text-indigo-500 text-lg mt-3  font-bold uppercase">
											YOUR INFORMATION
										</h6>
										<label className="my-6 text-xs text-gray-500">
											Your details are safe with us.
										</label>
									</div>
									<div className="flex flex-wrap mt-4">
										<div className="w-full lg:w-6/12 px-4 ">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Username
												</label>
												<input
													type="text"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													defaultValue={userDetails.username}
												/>
											</div>
										</div>
										<div className="w-full lg:w-6/12 px-4">
											<div className="relative w-full mb-3">
												<label
													className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
													htmlFor="grid-password"
												>
													Email address
												</label>
												<input
													type="email"
													className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
													defaultValue={userDetails.email}
												/>
											</div>
										</div>
									</div>
								</form>
							)}
							<SellerRankSetter />

							<hr className="mt-6 border-b-1 border-blueGray-300" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
