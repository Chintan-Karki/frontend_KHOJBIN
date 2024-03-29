import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind.js";
import Compare from "../../assets/icons/Compare.jsx";
import logo from "../../assets/images/newLogo.png";
import { useAuthStore, useCompareStore } from "../../utils/store.js";
import LogBtn from "../atoms/LogBtn.jsx";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	let compareProducts = useCompareStore((state) => state.compareProducts);

	let userName = localStorage.getItem("userName");

	let isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	let twNavBarClasses = {
		navDivClasses:
			"relative flex flex-wrap items-center justify-between px-2 py-3 mb-3",
		activeNavBtnClasses:
			"transition h-10 px-3 py-2 mr-2 border-2 text-orange-50 border-orange-500 bg-orange-500 font-bold font-mono  flex items-center text-xs uppercase  rounded-md",
		inActiveNavBtnClasses:
			"transition h-10 px-3 bg-white py-2 mr-2 border-2 hover:text-orange-50 hover:border-orange-500 hover:bg-orange-500 border-indigo-300 font-bold font-mono hover:shadow-lg hover:shadow-orange-400/60 focus:shadow-none flex items-center text-xs uppercase  text-indigo-900 rounded-md",
	};

	useEffect(() => {
		console.log("");
	}, [isLoggedIn]);

	return (
		<>
			<nav className={twNavBarClasses.navDivClasses}>
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className=" relative flex justify-between sm:w-auto w-screen sm:static sm:block sm:justify-start">
						<Link
							to="/"
							className="text-sm font-bold leading-relaxed inline-block py-2
							whitespace-nowrap uppercase text-gray"
						>
							<img src={logo} className="h-10 " alt="logo" />
						</Link>

						<button
							className="text-gray transition-transform cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							{navbarOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
					<div
						className={
							"sm:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
					>
						<ul className="flex my-2 sm:my-0 flex-row sm:flex-row list-none sm:ml-auto ">
							{!isLoggedIn ? (
								<li className="nav-item mr-2">
									<NavLink
										to="/signup"
										className={({ isActive }) =>
											isActive
												? tailwindCommonClasses.smallButtonFocus
												: tailwindCommonClasses.smallButtonNofocus
										}
									>
										{" "}
										SIGN UP
									</NavLink>
								</li>
							) : (
								<>
									<NavLink
										to="/profile"
										className={({ isActive }) =>
											isActive
												? twNavBarClasses.activeNavBtnClasses
												: twNavBarClasses.inActiveNavBtnClasses
										}
									>
										{userName ? userName : "Profile"}
									</NavLink>

									<NavLink
										to="/wishlist"
										className={({ isActive }) =>
											isActive
												? twNavBarClasses.activeNavBtnClasses
												: twNavBarClasses.inActiveNavBtnClasses
										}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 min-h-6 w-6 min-w-6 "
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
											/>
										</svg>
									</NavLink>
									<NavLink
										to="/compare"
										className={({ isActive }) =>
											isActive
												? twNavBarClasses.activeNavBtnClasses
												: twNavBarClasses.inActiveNavBtnClasses
										}
									>
										<Compare />
										<span className="group-hover:bg-yellow-800  group-hover:text-orange-50 text-md ml-3 bg-orange-500 p-2 text-white rounded -mr-[0.6rem]">
											{compareProducts.length}
										</span>
									</NavLink>
								</>
							)}
							<li>
								<LogBtn />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
