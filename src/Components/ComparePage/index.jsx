import React, { useEffect, useState } from "react";
import { useCompareStore, useProductsStore } from "../../utils/store";
import "./table.css";
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/icons/Trash";
import Like from "..//..//assets//icons//like.png";
import LinkIcon from "../../assets/icons/LinkIcon";
import axiosInstance from "../../utils/axios//axios.js";
import Modal from "../atoms/Modal";
import SessionExpired from "../Modals/SessionExpired";
import AlreadyExists from "../Modals/AlreadyExists";

export default function ComparePage() {
	let compareProduct = useCompareStore((state) => state.compareProducts);
	let setCompareProducts = useCompareStore((state) => state.setCompareProducts);
	let productsFiltered = useProductsStore((state) => state.productsFiltered);
	let navigate = useNavigate();

	let userId = localStorage.getItem("userId");
	let [isOpen, setIsOpen] = useState(false);
	let [isErrorOpen, setIsErrorOpen] = useState(false);
	let [isAlreadyExistErrorOpen, setIsAlreadyExistErrorOpen] = useState(false);
	let [headerTextForModal, setHeaderTextForModal] = useState("");
	let [bodyTextForModal, setBodyTextForModal] = useState("");

	useEffect(() => {
		// console.log(compareProduct);
	}, [compareProduct]);

	function removeProduct(productId) {
		setCompareProducts(
			compareProduct.filter((item) => item.itemId !== productId)
		);
	}

	const handleAddToWishlist = async (product) => {
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
				err.response.data.product_id[0] !==
				"wish list with this product id already exists."
					? setIsErrorOpen(true)
					: setIsAlreadyExistErrorOpen(true);
			});
	};

	return (
		<div className="container mx-auto px-4">
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
				<span className="text-2xl  text-[#3b3589] font-extrabold">
					Comparison
				</span>
				{compareProduct.length === 0 ? (
					<NothingInList />
				) : (
					<div className="mx-auto transition-all">
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
							<table className="w-full text-sm text-left text-gray-700  transition-all">
								<tr className="bg-white border-b hover:bg-gray-50 ">
									<td className="px-6 py-4 h-40"></td>
									<td className="px-6 py-4 h-20">Name</td>
									<td className="px-6 py-4 h-16">Price</td>

									<td className="px-6 py-4 h-10">Ratings</td>
									<td className="px-6 py-4 h-16">Seller </td>
									<td className="px-2 py-4 h-20 "></td>
								</tr>
								{compareProduct.length !== 0 &&
									compareProduct.map((product, index) => (
										<tr
											className={
												"bg-white border-b hover:bg-gray-50 " +
													compareProduct.length ===
												1
													? "w-auto"
													: compareProduct.length === 2
													? "w-1/2"
													: compareProduct.length === 3
													? "w-1/3"
													: compareProduct.length === 4
													? "w-1/4"
													: "w-auto"
											}
											key={index}
										>
											<td className="px-6 py-4 h-40 bg-white">
												<img
													src={product.image_url}
													className="object-scale-down h-32"
													alt={product.name}
												/>
											</td>{" "}
											{/*  Name */}
											<td className="px-6 py-4 h-20 overflow-hidden font-bold">
												{product.name}
											</td>{" "}
											{/*  Price */}
											<td className="px-6 py-4 h-16 font-extrabold text-lg">
												NRs. {product.price}
											</td>{" "}
											{/* Ratings */}
											<td className="px-6 py-4 h-10">
												{product.ratingScore} based on {product.reviewCount}{" "}
												reviews.
											</td>{" "}
											{/* Seller Name */}
											<td className="px-6 py-4 h-16">
												<img
													src={product.sellerImageUrl}
													className="object-scale-down h-8 p-2 rounded bg-white"
													alt={product.sellerName}
												/>
											</td>{" "}
											{/* Go to product */}
											<td className="px-6 py-4 h-20 flex bg-white">
												<div className="flex items-center justify-start gap-1 w-full">
													<a
														href={product.productUrl}
														className="text-indigo-600 hover:underline text-xs p-2 bg-white hover:bg-indigo-100 rounded-l-lg border border-indigo-200"
														target="_blank"
														rel="noreferrer"
													>
														<LinkIcon />
													</a>
													{/* <button className="font-medium text-blue-600  hover:underline p-[0.625rem] bg-white hover:bg-indigo-100 border border-indigo-200"> */}
													<img
														src={Like}
														alt="like"
														className="h-[2.63rem]  p-2 bg-white hover:bg-indigo-100 border border-indigo-200"
														onClick={() => handleAddToWishlist(product)}
													/>
													{/* </button> */}
													<button
														className="font-medium text-red-600  hover:underline bg-white hover:bg-indigo-100 p-3 rounded-r-lg border border-indigo-200"
														onClick={() => {
															removeProduct(product.itemId);
														}}
													>
														<Trash />
													</button>
												</div>
											</td>{" "}
										</tr>
									))}
							</table>
						</div>
						<button
							className="p-4 px-6 text-md my-4  text-indigo-800 bg-blue-100 hover:bg-blue-200 rounded-lg hover:scale-95 transition-all"
							onClick={() => {
								productsFiltered.length !== 0
									? navigate("/searchresults")
									: navigate("/");
							}}
						>
							{" "}
							Add more to the list
						</button>
					</div>
				)}
			</>
		</div>
	);
}

function NothingInList() {
	let navigate = useNavigate();
	return (
		<div className="flex flex-col items-start h-[20vh]">
			<div className="">
				<h1 className="text-3xl font-bold py-8">No products to compare</h1>
				<p className="text-lg pb-4">Please add products to compare</p>
			</div>
			<button
				className="px-12 py-4 text-xl font-semibold text-blue-800 bg-blue-100 rounded-lg hover:scale-95 transition-all"
				onClick={() => navigate("/searchresults")}
			>
				{" "}
				Go to add products
			</button>
		</div>
	);
}
