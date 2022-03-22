import React from "react";
import { motion } from "framer-motion";
// import { createBrowserHistory } from "react-router-dom";
import ImageNotFound from "../../assets/images/ImageNotFound.png";
import Like from "../../assets/icons/like.png";
import { useAuthStore } from "../../utils/store";
import ShopButton from "../atoms/ShopButton";
import axiosInstance from "../../utils/axios";

export default function Product({ product, altText, seller, price }) {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

	const handleAddToWishlist = async () => {
		let userId = localStorage.getItem("userId");
		let data = {
			name: product.name,
			price: product.price,
			member: Number(userId),
			description: "No description",
			imageUrl: product.image_url,
			sellerName: product.sellerName,
			sellerImageUrl: product.sellerImageUrl,
			productUrl: product.productUrl,
			previous_price: Number(0),
			current_price: Number(product.price),
		};
		await axiosInstance.post(`wishlist/`, data).then((res) => {
			alert("Added to wishlist ✅");
		});
	};

	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className=""
		>
			<motion.div className="my-2 antialiased text-gray-900 w-auto ">
				<div className="relative">
					<img
						src={product.image_url ? product.image_url : ImageNotFound}
						alt={product.name}
						className=" object-scale-down bg-white w-full h-72 object-center rounded-3xl shadow-lg"
					></img>

					<div className="relative ">
						<div className=" pt-6 ">
							<div className="flex items-center justify-between ">
								<a
									target="_blank"
									href={
										product.sellerName === "Daraz"
											? "https://www." + product.sellerName + ".com.np/"
											: "https://www." + product.sellerName + ".com/"
									}
									rel="noreferrer"
								>
									<span className=" mt-0 mb-1 bg-white text-indigo-500 text-xs p-2 inline-block rounded-full hover:shadow-md focus:shadow-none cursor-pointer  tracking-wide truncate">
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
								</a>
								<ShopButton url={product.productUrl} />
							</div>

							<h4 className="mt-2 text-md font-medium uppercase leading-tight truncate">
								{product.name}
							</h4>

							<div className="mt-1 text-xl font-extrabold">
								NRs. {price}
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
											className="transform h-6 hover:scale-150 transition ease-in duration-75 focus:scale-95 cursor-pointer"
											onClick={handleAddToWishlist}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
