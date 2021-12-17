import React from "react";
import { Link } from "react-router-dom";
import tailwindCommonClasses from "../../assets/commonClasses.tailwind.js";
import logo from "../../assets/images/logoPrimary.svg";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	let twNavBarClasses = {
		navDivClasses:
			"relative flex flex-wrap items-center justify-between px-2 py-3 mb-3",
	};

	return (
		<>
			<nav className={twNavBarClasses.navDivClasses}>
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className=" relative flex justify-between lg:w-auto w-screen lg:static lg:block lg:justify-start">
						<Link
							to="/"
							className="text-sm font-bold leading-relaxed inline-block py-2
							whitespace-nowrap uppercase text-gray"
						>
							<img src={logo} alt="logo" />
						</Link>
						<button
							className="text-gray transition-transform cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
					>
						<ul className="flex my-2 lg:my-0 flex-row lg:flex-row list-none lg:ml-auto">
							<li className="nav-item mr-2">
								<Link
									to="/signup"
									className={tailwindCommonClasses.smallButtonNofocus}
								>
									{" "}
									SIGN UP
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/login"
									className={tailwindCommonClasses.smallButtonFocus}
								>
									LOG IN
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
