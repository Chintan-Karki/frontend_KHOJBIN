import React from "react";
import { Link } from "react-router-dom";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind.js";
import logo from "../../assets/images/chillLogoNew.svg";
import { useAuthStore } from "../../utils/store.js";
import LogBtn from "./LogBtn.jsx";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	let userName = useAuthStore((state) => state.userName);
	let isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	let twNavBarClasses = {
		navDivClasses:
			"relative flex flex-wrap items-center justify-between px-2 py-3 mb-3",
	};

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
							<img src={logo} className="h-10 min-h-fit" alt="logo" />
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
						<ul className="flex my-2 sm:my-0 flex-row sm:flex-row list-none sm:ml-auto">
							{!isLoggedIn ? (
								<li className="nav-item mr-2">
									<Link
										to="/signup"
										className={tailwindCommonClasses.smallButtonNofocus}
									>
										{" "}
										SIGN UP
									</Link>
								</li>
							) : (
								<p className="px-3 py-2 border-2 flex items-center text-xs uppercase text-indigo-900 rounded-md">
									{userName.trim()}
								</p>
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
