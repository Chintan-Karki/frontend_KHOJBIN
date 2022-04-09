import React, { useEffect } from "react";
import { useCompareStore } from "../../utils/store";
import "./table.css";
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/icons/Trash";
import Like from "..//..//assets//icons//like.png";
import LinkIcon from "../../assets/icons/LinkIcon";

export default function ComparePage() {
	let compareProduct = useCompareStore((state) => state.compareProducts);
	let setCompareProducts = useCompareStore((state) => state.setCompareProducts);
	let navigate = useNavigate();

	useEffect(() => {
		// console.log(compareProduct);
	}, [compareProduct]);

	function removeProduct(productId) {
		setCompareProducts(
			compareProduct.filter((item) => item.itemId !== productId)
		);
	}

	return (
		<div className="container mx-auto px-4">
			<>
				<span className="text-2xl  text-slate-700 font-extrabold">
					Comparison
				</span>
				{compareProduct.length === 0 ? (
					<NothingInList />
				) : (
					<div className="mx-auto">
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
							<table className="w-full text-sm text-left text-gray-700 ">
								<tbody>
									<tr className="bg-white border-b   hover:bg-gray-50 ">
										<th
											scope="row"
											className="px-6 py-4 font-medium whitespace-nowrap "
										></th>
										<td className="px-6 py-4">Name</td>
										<td className="px-6 py-4">Price</td>

										<td className="px-6 py-4">Ratings</td>
										<td className="px-6 py-4">Seller </td>
										<td className="px-2 py-4 "></td>
										<td className="px-2 py-4 "></td>
										<td className="px-2 py-4 "></td>
									</tr>

									{compareProduct.length !== 0 &&
										compareProduct.map((product, index) => (
											<tr
												className="bg-white border-b  hover:bg-gray-50 "
												key={index}
											>
												<th
													scope="row"
													className="px-6 py-4 font-medium whitespace-nowrap "
												>
													<img
														src={product.image_url}
														className="object-scale-down h-32"
														alt={product.name}
													/>
												</th>
												{/*  Name */}
												<td className="px-6 py-4">{product.name}</td>{" "}
												{/*  Price */}
												<td className="px-6 py-4">{product.price}</td>{" "}
												{/* Ratings */}
												<td className="px-6 py-4">
													{product.ratingScore} based on {product.reviewCount}{" "}
													reviews.
												</td>{" "}
												{/* Seller Name */}
												<td className="px-6 py-4">
													<img
														src={product.sellerImageUrl}
														className="object-scale-down h-5"
														alt={product.sellerName}
													/>
												</td>{" "}
												{/* Go to product */}
												<td className="px-6 py-4">
													<a
														href={product.productUrl}
														className="text-indigo-600 hover:underline"
														target="_blank"
														rel="noreferrer"
													>
														<LinkIcon />
													</a>
												</td>{" "}
												<td className="px-6 py-4 ">
													<button className="font-medium text-blue-600  hover:underline">
														<img
															src={Like}
															alt="like"
															className="h-5 w-5 hover:scale-105"
														/>
													</button>
												</td>
												<td className="px-6 py-4 ">
													<button
														className="font-medium text-red-600  hover:underline"
														onClick={() => {
															removeProduct(product.itemId);
														}}
													>
														<Trash />
													</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
						<button
							className="px-12 py-4 text-xl my-4 font-semibold text-blue-800 bg-blue-100 rounded-lg hover:scale-95 transition-all"
							onClick={() => navigate("/searchresults")}
						>
							{" "}
							Go to add products
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
