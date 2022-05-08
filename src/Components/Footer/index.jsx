import React from "react";
import logo from "..//..//assets//images//LOGO-MINI.png";
import { Link } from "react-router-dom";
import FooterBase from "./FooterBase";

export default function Footer() {
	return (
		<footer className="p-4 bg-white sm:p-6  mt-[10vh]">
			<div className="container mx-auto md:flex md:justify-between">
				<div className="mb-6 md:mb-0">
					<a href="https://Khojbin.com" className="flex items-center">
						<img src={logo} className="mr-3 h-8" alt="khojbin Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap ">
							Khojbin
						</span>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
							Resources
						</h2>
						<ul className="text-gray-600 ">
							<li className="mb-4">
								<Link to="/tutorial" className="hover:underline">
									Khojbin
								</Link>
							</li>
							<li>
								<a href="https://tailwindcss.com/" className="hover:underline">
									Tailwind CSS
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
							Follow us
						</h2>
						<ul className="text-gray-600 ">
							<li className="mb-4">
								<a
									href="https://github.com/Chintan-Karki"
									className="hover:underline "
								>
									Github
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/chintankarki/"
									className="hover:underline"
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
							Legal
						</h2>
						<ul className="text-gray-600 ">
							<li className="mb-4">
								<Link to="/privacy-policy" className="hover:underline">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="terms-and-conditions" className="hover:underline">
									Terms &amp; Conditions
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<FooterBase />
		</footer>
	);
}
