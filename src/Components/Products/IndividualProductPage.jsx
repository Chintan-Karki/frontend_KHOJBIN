import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore, useProductsStore } from "../../utils/store";
import likeBtn from "../../assets/icons/like.png";
import ImageNotFound from "../../assets/images/ImgNotFound.png";

import axiosInstance from "../../utils/axios/axios";

import GoToWeb from "../../assets/icons/GoToWeb";
import BreadCrumb from "./BreadCrumb";
import RecommendedProducts from "./Recommendation/RecommendedProducts";
import SessionExpired from "../Modals/SessionExpired";
import AlreadyExists from "../Modals/AlreadyExists";
import Modal from '../Modals/Modal';

export default function IndividualProductPage() {
	let currentProduct = useProductsStore((state) => state.currentProduct);
	let productsFiltered = useProductsStore((state) => state.productsFiltered);

	// For modals
	let [isOpen, setIsOpen] = useState(false);
	let [isErrorOpen, setIsErrorOpen] = useState(false);
	let [isAlreadyExistErrorOpen, setIsAlreadyExistErrorOpen] = useState(false);

	let [headerTextForModal, setHeaderTextForModal] = useState("");
	let [bodyTextForModal, setBodyTextForModal] = useState("");

	let isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	let navigate = useNavigate();

	const handleAddToWishlist = async () => {
		let userId = localStorage.getItem("userId");

		let data = {
			name: currentProduct.name,
			price: currentProduct.price,
			member: Number(userId),
			description: "No description",
			image_url: currentProduct.image_url,
			seller_name: currentProduct.sellerName,
			seller_image_url: currentProduct.sellerImageUrl,
			product_url: currentProduct.productUrl,
			previous_price: Number(0),
			current_price: Number(currentProduct.price),
			product_id: currentProduct.itemId + "" + userId,
			rating_score: currentProduct.ratingScore,
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
				err.response.data.product_id[0] !==
				"wish list with this product id already exists."
					? setIsErrorOpen(true)
					: setIsAlreadyExistErrorOpen(true);
			});
	};

	useEffect(() => {
		if (currentProduct === 0) {
			navigate("/");
			return;
		}
	}, [navigate, currentProduct]);

	return (
		<>
			<Modal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				headerText={headerTextForModal}
				bodyText={bodyTextForModal}
			/>
			<SessionExpired isOpen={isErrorOpen} setIsOpen={setIsErrorOpen} />
			<AlreadyExists
				isOpen={isAlreadyExistErrorOpen}
				setIsOpen={setIsAlreadyExistErrorOpen}
			/>
			<BreadCrumb />
			<div className="mx-auto flex container rounded-xl mt-8  mb-10 px-4  ">
				<div className="flex flex-col lg:flex-row w-full  mx-auto bg-white rounded-xl justify-center items-center shadow-xl ">
					<div className="flex-shrink-0 flex items-start pt-10  top-96 justify-center  lg:max-w-[430px] h-[330px] lg:h-full lg:max-h-full overflow-hidden bg-white rounded-none rounded-t-xl lg:rounded-none lg:rounded-l-xl">
						<img
							src={
								currentProduct.image_url
									? currentProduct.image_url
									: ImageNotFound
							}
							alt={currentProduct.name}
							className="object-scale-down lg:w-96 lg:max-h-[400px] "
						/>
					</div>
					<div className="flex flex-col p-5 md:p-10 w-full bg-white rounded-none rounded-b-xl lg:rounded-none lg:rounded-r-xl">
						<div className="pb-8">
							<div className="mb-2 md:mb-2.5 block -mt-1.5" role="button">
								<h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
									{currentProduct.name}
								</h2>
							</div>
							<p className="text-sm leading-6 md:text-body md:leading-7">
								ID: {currentProduct.itemId}
							</p>
							<div className="flex items-center mt-3">
								<div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
									NRs. {currentProduct.price}
								</div>
							</div>
						</div>
						<div className="mb-4">
							<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
								Seller
							</h3>
							<ul className="colors flex flex-wrap -me-3">
								<li className="cursor-pointer rounded border border-gray-100 w-auto md:w-auto h-9 md:h-11 p-1 py-2 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:bg-slate-100">
									<img
										src={currentProduct.sellerImageUrl}
										alt="seller"
										className="object-scale-down h-5"
									/>
								</li>
							</ul>
						</div>

						{currentProduct.description.length !== 0 && (
							<div className="mb-4">
								<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
									Description
								</h3>
								{typeof currentProduct.description === "string" ? (
									<p className="text-md text-gray-600">
										{currentProduct.description
											.toString()
											.replace(/&rlm;/g, "")
											.replace(/&nbsp;/g, " ")
											.replace(/&rsquo;/g, "'")
											.replace(/&mdash;/g, "-")
											.replace(/&quot;/g, '"')
											.replace(/&amp;/g, "&")
											.replace(/&#039;/g, "'")
											.replace(/&lrm;/g, ")")}
									</p>
								) : (
									<div className="text-md text-gray-600">
										{currentProduct.description.map((desc) => (
											<p className="text-md text-gray-600" key={desc}>
												{desc
													.toString()
													.replace(/&rlm;/g, "")
													.replace(/&nbsp;/g, " ")
													.replace(/&rsquo;/g, "'")
													.replace(/&mdash;/g, "-")
													.replace(/&quot;/g, '"')
													.replace(/&amp;/g, "&")
													.replace(/&lrm;/g, "")}
											</p>
										))}
									</div>
								)}
							</div>
						)}
						<div className="mb-4">
							<h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
								Ratings
							</h3>
							<p className="text-md text-gray-600">
								{currentProduct.ratingScore === "0" ? (
									<span>This product has no ratings yet 🙂</span>
								) : (
									<span>
										This product has ratings of {currentProduct.ratingScore}{" "}
										based on {currentProduct.reviewCount} reviews.
									</span>
								)}
							</p>
						</div>
						<div className="pt-2 md:pt-4 flex">
							<a
								href={currentProduct.productUrl}
								target="_blank"
								data-variant="flat"
								className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white bg-indigo-600 px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-indigo-700 hover:shadow-cart w-full h-11 md:h-12"
								rel="noreferrer"
							>
								Go to site &nbsp; <GoToWeb />
							</a>
							{isLoggedIn && (
								<button
									className="w-20 flex justify-end items-center"
									onClick={handleAddToWishlist}
								>
									{" "}
									<img
										src={likeBtn}
										alt="like button"
										className="h-8 w-auto hover:h-10 transition-all"
									/>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
			{isLoggedIn && (
				<div className="mx-auto flex container rounded-xl mt-8  mb-10 px-4  ">
					<RecommendedProducts
						currentProduct={currentProduct}
						productsFiltered={productsFiltered}
					/>
				</div>
			)}
		</>
	);
}
