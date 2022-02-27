import React from "react";

export default function Filters() {
	return (
		<div className="flex-shrink-0 hidden lg:block w-1/5 my-2 bg-white mr-10 p-6 rounded-lg shadow-lg">
			<section className="block border-b border-gray-300 pb-7 mb-7">
				<div className="flex items-center justify-between mb-2.5">
					<h2 className="font-semibold text-heading text-xl md:text-2xl">
						Filters
					</h2>
					<button
						className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
						aria-label="Clear All"
					>
						Clear All
					</button>
				</div>
			</section>
		</div>
	);
}
