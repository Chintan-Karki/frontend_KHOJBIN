import React from "react";
import { Link } from "react-router-dom";
import Compare from "../../assets/icons/Compare";
import logo from "../../assets/images/LOGO-MINI.png";

export default function Description() {
	return (
		<div className="max-w-7xl  mx-auto px-4 sm:px-6 md:px-8 mt-28">
			<img
				className="bg-white object-scale-down p-3  w-16 h-16 rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden"
				src={logo}
				alt="logo"
			/>

			<h2 className="mt-8 font-semibold text-indigo-500 ">
				Product Aggregation
			</h2>
			<p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight  ">
				A simple search engine for your&nbsp;needs.
			</p>
			<p className="mt-4 max-w-3xl space-y-6 ">
				A common search engine enables you to search for products from any of
				the different seller sites in Nepal.{" "}
				<b className="text-indigo-700">KHOJBIN</b> is not just a search engine,
				it is your best buddy to tell you the{" "}
				<b className="text-green-700">best product at the best price</b>
			</p>
			<Link
				className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500  mt-8"
				to="/"
			>
				Go to search
				<svg
					className="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 "
					width={3}
					height={6}
					viewBox="0 0 3 6"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M0 0L3 3L0 6" />
				</svg>
			</Link>
			<div className="mt-10">
				<div className="flex overflow-auto -mx-4 sm:mx-0">
					<ul
						className="flex-none inline-grid gap-x-2 px-4 sm:px-0 xl:gap-x-6"
						style={{ gridTemplateColumns: "repeat(4, minmax(6rem, 1fr))" }}
					>
						<li>
							<button
								type="button"
								className="group text-sm font-semibold w-full flex flex-col items-center text-indigo-600 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									width={48}
									height={48}
									aria-hidden="true"
									className="mb-6 text-indigo-500 "
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
								Search
							</button>
						</li>
						<li>
							<button
								type="button"
								className="group text-sm font-semibold w-full flex flex-col items-center text-indigo-600 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									width={48}
									height={48}
									aria-hidden="true"
									className="mb-6 text-indigo-500 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
									/>
								</svg>
								Anywhere
							</button>
						</li>
						<li>
							<button
								type="button"
								className="group text-sm font-semibold w-full flex flex-col items-center text-indigo-600 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									width={48}
									height={48}
									aria-hidden="true"
									className="mb-6 text-indigo-500 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
								Filter
							</button>
						</li>
						<li>
							<button
								type="button"
								className="group text-sm font-semibold w-full flex flex-col items-center text-indigo-600 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="1"
									width={48}
									height={48}
									aria-hidden="true"
									className="mb-6 text-indigo-500 "
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
									></path>
								</svg>
								Compare
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
