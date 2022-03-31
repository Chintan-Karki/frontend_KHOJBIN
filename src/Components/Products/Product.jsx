import React, { useState } from "react";
import { motion } from "framer-motion";
// import { createBrowserHistory } from "react-router-dom";
import ImageNotFound from "../../assets/images/ImgNotFound.png";
import Like from "../../assets/icons/like.png";
import { useAuthStore, useProductsStore } from "../../utils/store";
import ShopButton from "../atoms/ShopButton";
import axiosInstance from "../../utils/axios";
import Modal from "../atoms/Modal";
import { Link } from "react-router-dom";

export default function Product({ product, altText, seller, price }) {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	let userId = localStorage.getItem("userId");

	let [isOpen, setIsOpen] = useState(false);
	let [headerTextForModal, setHeaderTextForModal] = useState("");
	let [bodyTextForModal, setBodyTextForModal] = useState("");
	let setCurrentProduct = useProductsStore((state) => state.setCurrentProduct);

	const handleAddToWishlist = async () => {
		let data = {
			name: product.name,
			price: product.price,
			member: Number(userId),
			description: "No description",
			image_url: product.image_url,
			seller_name: product.sellerName,
			seller_image_url: product.sellerImageUrl,
			product_url: product.productUrl,
			previous_price: Number(0),
			current_price: Number(product.price),
			product_id: product.itemId + "" + userId,
			rating_score: product.ratingScore,
		};
		console.log(data);
		await axiosInstance
			.post(`wishlist/`, data)
			.then((res) => {
				// alert("Added to wishlist ✅");
				setHeaderTextForModal("Product Added to wishlist ✅");
				setBodyTextForModal(
					"You can view your wishlist in the 'My wishlist' section in the 'Profile' tab in the website 🙂"
				);
				setIsOpen(true);
			})
			.catch((err) => {
				alert(err.response.data.product_id[0]);
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
			<motion.div className="my-2  antialiased text-gray-900 w-auto ">
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					headerText={headerTextForModal}
					bodyText={bodyTextForModal}
				/>
				<div className="relative">
					<Link to={`/searchresults/${product.itemId}`}>
						<img
							src={product.image_url ? product.image_url : ImageNotFound}
							alt={product.name}
							loading="lazy"
							className=" object-scale-down hover:border-2 hover:border-indigo-200 bg-white w-full h-72 object-center rounded-3xl shadow-lg hover:shadow-sm"
							onClick={() => setCurrentProduct(product)}
						></img>
					</Link>

					<div className="relative ">
						<div className=" pt-6 ">
							<div className="flex items-center justify-between ">
								<a
									target="_blank"
									href={
										product.sellerName === "Daraz"
											? "https://www." + product.sellerName + ".com.np/"
											: product.sellerName === "ryzen"
											? "https://ecommerce.thexpresstimes.com/"
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
							<Link to={`/searchresults/${product.itemId}`}>
								<h4
									className="mt-2 text-md font-medium uppercase leading-tight truncate"
									onClick={() => {
										setCurrentProduct(product);
									}}
								>
									{product.name}
								</h4>
							</Link>
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
