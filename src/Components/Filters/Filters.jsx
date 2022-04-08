import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useProductsStore, useSortStore } from "../../utils/store";
import _ from "lodash";
import PriceRange from "./PriceRange";

export default function Filters() {
	let productsFiltered = useProductsStore((state) => state.productsFiltered);
	let setProductsFiltered = useProductsStore(
		(state) => state.setProductsFiltered
	);
	const pillBtnClass =
		"transition ease-in-out duration-75 border-2 border-indigo-200 p-1  px-2 rounded-3xl text-xs text-gray-700 hover:bg-indigo-400 hover:text-white";
	const activePillBtnClass =
		"transition ease-in-out duration-75 border-2 border-indigo-400 p-1 px-2 rounded-3xl text-xs bg-indigo-400 text-white";

	let dataProductsTempStored = useRef(productsFiltered);
	let [selectedSellerSite, setSelectedSellerSite] = useState("All");
	// let sortOption = useSortStore((state) => state.sortOrder);
	let setSortOption = useSortStore((state) => state.setSortOrder);
	let setPriceRange = useSortStore((state) => state.setPriceRange);

	useEffect(() => {
		if (selectedSellerSite === "All") {
			setProductsFiltered(dataProductsTempStored.current);
			return;
		}
		let filteredProductsData = _.filter(
			[...dataProductsTempStored.current],
			function (o) {
				return (
					o.sellerName.toString().toLowerCase() ===
					selectedSellerSite.toString().toLowerCase()
				);
			}
		);
		setProductsFiltered(filteredProductsData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedSellerSite]);

	return (
		<aside className="flex-shrink-0 hidden lg:block w-1/5 my-2 bg-white mr-10 p-6  rounded-lg shadow-lg h-min sticky top-5">
			<section className="border-b border-gray-300 pb-2 mb-2 flex items-center justify-between">
				<h2 className="font-semibold text-heading text-xl md:text-2xl text-gray-700">
					Filters
				</h2>
				<button
					className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
					aria-label="Clear All"
					onClick={() => {
						setSelectedSellerSite("All");
						setSortOption(-1);
					}}
				>
					Clear All
				</button>
			</section>
			<div className="my-2 mb-4 text-gray-500">Shops</div>
			<motion.section
				layout
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.4 }}
				className="pb-2 mb-4 flex items-start justify-start flex-wrap gap-1 "
			>
				<button
					className={
						selectedSellerSite === "All" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("All")}
				>
					All{" "}
					{
						<span className="text-xs ">
							(<span>{dataProductsTempStored.current.length}</span>)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Daraz" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => {
						setSelectedSellerSite("Daraz");
						let tempArray = dataProductsTempStored.current.filter(
							(product) =>
								product.sellerName.toString().toLowerCase() === "daraz"
						);
						setPriceRange([
							Math.min(...tempArray.map((item) => item.price)),
							Math.max(...tempArray.map((item) => item.price)),
						]);
					}}
				>
					Daraz{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									dataProductsTempStored.current.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() === "daraz"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Sastodeal"
							? activePillBtnClass
							: pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Sastodeal")}
				>
					Sastodeal{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									dataProductsTempStored.current.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() ===
											"sastodeal"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "ryzen" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("ryzen")}
				>
					Ryzen{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									dataProductsTempStored.current.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() === "ryzen"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Hamrobazaar"
							? activePillBtnClass
							: pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Hamrobazaar")}
				>
					Hamrobazaar{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									dataProductsTempStored.current.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() ===
											"hamrobazaar"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Gyapu" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Gyapu")}
				>
					Gyapu{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									dataProductsTempStored.current.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() === "gyapu"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
			</motion.section>
			<PriceRange />
		</aside>
	);
}
