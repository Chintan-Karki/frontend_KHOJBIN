import React from "react";
// import { createBrowserHistory } from "react-router-dom";
import ImageNotFound from "../../assets/images/ImageNotFound.png";
import Like from "../../assets/icons/like.png";
import { useAuthStore } from "../../utils/store";

export default function Product({ product, altText, seller, price }) {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	return (
		<div className="">
			<div className="my-2 antialiased text-gray-900 w-auto ">
				<div className="relative">
					<img
						src={product.image_url ? product.image_url : ImageNotFound}
						alt={product.name}
						className=" object-scale-down bg-white w-full h-72 object-center rounded-lg shadow-md"
					></img>

					<div className="relative px-1  ">
						<div className=" p-1 pt-6 rounded-lg ">
							<div className="flex items-center justify-between ">
								<span className=" -mt-1 mb-1 bg-white text-indigo-500 text-xs p-2 inline-block rounded-full  uppercase font-semibold tracking-wide truncate">
									<img
										src={
											product.sellerImageUrl
												? product.sellerImageUrl
												: ImageNotFound
										}
										alt={product.name}
										className=" object-scale-down bg-white w-full h-4 object-center  "
									></img>
								</span>
								<span className=" pointer transition ease-linear duration-150 -mt-1 mb-1 bg-white underline px-4 text-indigo-500 text-xs p-2 inline-block rounded-full  uppercase font-semibold tracking-wide truncate hover:bg-indigo-800 hover:text-indigo-50 hover:shadow-md hover:font-bold">
									<a href={product.productUrl} target="_blank" rel="noreferrer">
										Go to item
									</a>
								</span>
								{/* <div className="relative ml-2 group text-indigo-600 uppercase text-xs font-semibold tracking-wider w-30 hover:text-green-900 hover:underline hover:underline-offset-4 truncate">
									<a href={product.productUrl} target="_blank" rel="noreferrer">
										<span className="absolute -left-5 invisible group-hover:visible">
											&nbsp;➹
										</span>{" "}
										Go to item
									</a>
								</div> */}
							</div>

							<h4 className="mt-2 text-xl font-semibold uppercase leading-tight truncate">
								{product.name}
							</h4>

							<div className="mt-1">
								Nrs. {price}
								<span className="text-gray-600 text-sm"> </span>
							</div>
							<div className="mt-4 flex wrap justify-between items-center">
								<div>
									<span className="text-indigo-600 text-md font-semibold">
										{product.ratingScore === "0"
											? "Not rated yet"
											: product.ratingScore + "/5 ratings"}{" "}
									</span>
									<br />
									<span className="text-sm text-gray-600">
										(based on {product.reviewCount} reviews)
									</span>
								</div>
								{isLoggedIn && (
									<div>
										<img
											src={Like}
											alt="Like button for adding product to the wishlist"
											className="transform h-6 hover:scale-125 transition-all focus:scale-95 cursor-pointer"
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
