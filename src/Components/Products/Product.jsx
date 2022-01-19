import React from "react";
import productImg from "../../assets/images/productDemo.jpeg";
import { Link } from "react-router-dom";

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
			<div className="my-2 antialiased text-gray-900 w-auto">
				<div className="relative">
					<img
						src={productImg}
						alt={altText}
						className=" object-cover w-full h-72 object-center rounded-lg shadow-md "
					></img>

					<div className="relative px-2 -mt-14 ">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<div className="flex items-baseline justify-between ">
								<span className="-mt-1 mb-1 bg-indigo-100 text-indigo-500 text-xs px-2 py-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
									{seller}
								</span>
								<div className="ml-2 group text-indigo-600 uppercase text-xs font-semibold tracking-wider w-30 hover:text-green-900 hover:underline hover:underline-offset-4 ">
									<Link to="test">
										<span className="invisible group-hover:visible">
											&nbsp;➹
										</span>{" "}
										Visit site
									</Link>
								</div>
							</div>

							<h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
								{searchQuery}
							</h4>

							<div className="mt-1">
								Nrs. {price * 100}
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
