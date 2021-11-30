// import React from "react";
import logo from "../assets/logoPrimary.svg";

// export default function NavBar() {
// 	return (
// 		// <section classNameNameName="header relative w-11/12 bg-gray-100 mt-16 block">
// 		// 	<img src={logo} alt="logo" classNameNameName=" ml-24  inline-block fixed " />
// 		// 	<button
// 		// 		classNameNameName=" absolute bg-indigo-500  text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-10 mb-1 ease-linear transition-all duration-150"
// 		// 		type="button"
// 		// 	>
// 		// 		{" "}
// 		// 		LOGIN
// 		// 	</button>
// 		// </section>

// 		<nav classNameName="flex items-center justify-between flex-wrap  p-6 w-5/6 m-auto sticky">
// 			<img
// 				src={logo}
// 				alt="logo"
// 				classNameNameName=" ml-24  inline-block fixed "
// 			/>
// 			{/* create a button component on the right side */}

// 			<div classNameName=" float-right object-right">
// 				<button classNameName=" flex items-center px-3 py-2 border rounded bg-indigo-500  text-white active:bg-pink-600 font-bold uppercase text-xs ">
// 					Login
// 				</button>
// 				<button classNameName=" px-3 py-2 border rounded bg-indigo-500  text-white active:bg-pink-600 font-bold uppercase text-xs ">
// 					Sign Up
// 				</button>
// 			</div>
// 		</nav>
// 	);
// }

import React from "react";

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 mb-3 ">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray"
							href="#home"
						>
							<img src={logo} alt="logo" />
						</a>
						<button
							className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>{" "}
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center  text-xs uppercase font-bold leading-snug text-gray hover:opacity-75"
									href="#sign up"
								>SIGN UP
								</a>
							</li>
							<li className="nav-item">
								<a
									className="px-3 py-2 flex items-center border rounded bg-indigo-500  text-white active:bg-pink-600 text-xs uppercase font-bold leading-snug text-gray hover:opacity-75"
									href="#login"
								>LOG IN
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
