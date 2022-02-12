import React from "react";
// import { Link } from "react-router-dom";
import ImageNotFound from "../../assets/images/ImageNotFound.png";

export default function Product({
	product,
	searchQuery,
	altText,
	seller,
	ratingPer5,
	price,
}) {
	return (
		<div className="">
			<div className="my-2 antialiased text-gray-900 w-auto ">
				<div className="relative">
					<img
						src={product.image_url ? product.image_url : ImageNotFound}
						alt={altText}
						className=" object-cover w-full h-72 object-center rounded-lg shadow-md "
					></img>

					<div className="relative px-2 -mt-14 ">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<div className="flex items-baseline justify-between ">
								<span className=" -mt-1 mb-1 bg-indigo-100 text-indigo-500 text-xs px-2 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide truncate">
									{seller}
								</span>
								<div className="relative ml-2 group text-indigo-600 uppercase text-xs font-semibold tracking-wider w-30 hover:text-green-900 hover:underline hover:underline-offset-4 truncate">
									<a href={product.seller.url} target="_blank" rel="noreferrer">
										<span className="absolute -left-5 invisible group-hover:visible">
											&nbsp;➹
										</span>{" "}
										Visit site
									</a>
								</div>
							</div>

							<h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
								{product.name}
							</h4>

							<div className="mt-1">
								Nrs. {price}
								<span className="text-gray-600 text-sm"> </span>
							</div>
							<div className="mt-4">
								<span className="text-indigo-600 text-md font-semibold">
									{ratingPer5}/5 ratings{" "}
								</span>
								<br />
								<span className="text-sm text-gray-600">
									(based on 234 ratings)
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
