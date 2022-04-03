import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
	useProductsStore,
	useSearchStore,
	useSortStore,
} from "../../utils/store";
import Product from "../Products/Product";

import Filters from "../Filters/Filters";
import SortMenu from "../Filters/SortMenu";
import ListView from "../../assets/icons/ListView";
import GridView from "../../assets/icons/GridView";
import ProductListView from "../Products/ProductListView";
// import MainLoader from "../atoms/MainLoader";

export default function SearchResults() {
	// toast("hello");
	let searchTime = useSearchStore((state) => state.search.searchTime) || 0;
	let searchQuery = useSearchStore((state) => state.search.search_query);
	let [loading, setLoading] = useState(true);
	let [gridView, setGridView] = useState(true);

	//* From Stores
	let setPriceRange = useSortStore((state) => state.setPriceRange);

	// Setting up the product's data
	let productsData = useProductsStore((state) => state.productsFiltered);

	// Passed to sorting
	let productsFiltered = useProductsStore((state) => state.productsFiltered);

	// For redirecting to certain pages
	const navigate = useNavigate();

	useEffect(() => {
		if (productsData.length === 0) {
			navigate("/");
			return;
		}
		let min = Math.min(...productsData.map((item) => item.price));
		let max = Math.max(...productsData.map((item) => item.price));
		// console.log(min, max);
		setPriceRange([min, max]);
		// setCurrentPriceRange([min, max]);

		setLoading(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate, productsData.length]);

	return (
		<>
			{loading ? (
				<div className="main-loader">
					<div className="loader">loading</div>
				</div>
			) : (
				<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
					<div className="container px-4 mx-auto items-center justify-between">
						<h1 className="text-xl sm:text-3xl lg:text-5xl text-slate-900">
							You searched for 👉 "{searchQuery}"
						</h1>
						<br />
						<span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">
							Time of search : {searchTime}
							<hr></hr>
						</span>
						{productsData.length < 1 ? (
							<h1 className="text-xl sm:text-2xl  md:text-6xl mt-10">
								Sorry, No items could be found
							</h1>
						) : null}
						<div className="flex pt-8 pb-16 lg:pb-20">
							<Filters />
							<div className="flex flex-col">
								<div className="flex flex-row-reverse mb-2 ">
									<SortMenu />
									<button
										className={`${
											gridView
												? "mr-2 p-2 bg-white rounded border border-indigo-100"
												: "mr-2 p-2"
										}`}
										onClick={() => {
											setGridView(true);
										}}
									>
										<GridView />
									</button>
									<button
										className={`${
											!gridView
												? "mr-2 p-2 bg-white rounded border border-indigo-100"
												: "mr-2 p-2"
										}`}
										onClick={() => {
											setGridView(false);
										}}
									>
										<ListView />
									</button>
								</div>
								<section>
									<motion.div
										layout
										className={`${
											gridView
												? "grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-5  xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 "
												: "w-full grid grid-cols-1 "
										}`}
									>
										<AnimatePresence>
											{gridView
												? productsFiltered.map((product) => (
														<Product
															key={product.itemId}
															product={product}
															altText={product.name}
															seller={product.sellerName}
															ratingPer5="3"
															price={product.price}
															searchQuery={searchQuery}
														/>
												  ))
												: productsFiltered.map((product) => (
														<ProductListView
															key={product.itemId}
															product={product}
															altText={product.name}
															seller={product.sellerName}
															ratingPer5="3"
															price={product.price}
															searchQuery={searchQuery}
														/>
												  ))}
										</AnimatePresence>
									</motion.div>
								</section>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
