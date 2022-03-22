import React from "react";
import Navbar from "../atoms/NavBar";
import WishedItems from "./WishedItems";

export default function Profile() {
	return (
		<>
			<Navbar />
			<section className=" py-1 bg-blueGray-50">
				<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
						<div className="rounded-t bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between">
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
							<form>
								<h6 className="text-blueGray-400 text-sm mt-6 mb-6 font-bold uppercase">
									My Information
								</h6>
								<div className="flex flex-wrap mt-10">
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Username
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="lucky.jesse"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Email address
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="jesse@example.com"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												First Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Lucky"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlfor="grid-password"
											>
												Last Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Jesse"
											/>
										</div>
									</div>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />
								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									My WishList
								</h6>
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
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
