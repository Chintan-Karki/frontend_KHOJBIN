import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axios";
import WishedItems from "../WishList/WishedItems";
import loaderGif from "../../assets/images/loaderGif2.gif";
// import MainLoader from "../atoms/MainLoader.jsx";

export default function Profile() {
	let [userDetails, setUserDetails] = useState({});
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosInstance.get("/user").then((res) => {
			console.log(res.data);
			setUserDetails(res.data);
			setTimeout(() => {
				setLoading(false);
			}, 600);
		});
	}, []);

	return (
		<>
			<section className=" py-1 ">
				<div className="w-full container px-4 mx-auto mt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-100 border-0">
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
									<h6 className="text-blueGray-400 text-sm mt-6 mb-6 font-bold uppercase">
										My Information
									</h6>
									<div className="flex flex-wrap mt-10">
										<div className="w-full lg:w-6/12 px-4">
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
													defaultValue={userDetails.name}
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

							<WishedItems />
							<hr className="mt-6 border-b-1 border-blueGray-300" />
							<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
								About Me
							</h6>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-12/12 px-4">
									<div className="relative w-full mb-3">
										<textarea
											type="text"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											rows={4}
											defaultValue={" Hello there !"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
