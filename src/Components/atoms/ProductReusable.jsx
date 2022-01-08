import React from "react";
export default function ProductReusable({
	altText,
	seller,
	searchQuery,
	ratingPer5,
	price,
}) {
	console.log(altText, seller, searchQuery, ratingPer5, price);
	return (
		<div className=" my-2 antialiased text-gray-900 w-auto">
			<div className="">
				<img
					src="https://source.unsplash.com/random/850x850"
					alt={altText}
					className="object-cover w-full h-72 object-center rounded-lg shadow-md"
				/>

				<div className="relative px-4 -mt-16 ">
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<div className="flex items-baseline">
							<span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
								{seller}
							</span>
							{/* <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
								2 baths &bull; 3 rooms
							</div> */}
						</div>

						<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
							{searchQuery}
						</h4>

						<div className="mt-1">Rs. {price}</div>
						<div className="mt-4">
							<span className="text-teal-600 text-md font-semibold">
								{ratingPer5}/5 ratings{" "}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
