import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useProductsStore, useSearchStore } from "../../utils/store";
import Navbar from "../atoms/NavBar";
import Product from "../Products/Product";

import Filters from "../Filters/Filters";
import SortMenu from "../Filters/SortMenu";

export default function SearchResults() {
	// toast("hello");
	let searchTime = useSearchStore((state) => state.search.searchTime);
	let searchQuery = useSearchStore((state) => state.search.search_query);
	let [loading, setLoading] = useState(true);

	// Setting up the product's data
	const productsData = useProductsStore((state) => state.productsFiltered);

	// Passed to sorting
	let productsFiltered = useProductsStore((state) => state.productsFiltered);

	// For redirecting to certain pages
	const navigate = useNavigate();

	useEffect(() => {
		if (productsData.length === 0) {
			navigate("/");
			return;
		}
		setLoading(false);
	}, [navigate, productsData.length]);

	return (
		<>
			<Navbar />
			{loading ? (
				<div className="flex items-center justify-center bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">
					Loading...
				</div>
			) : (
				<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
					<div className="container px-4 mx-auto items-center justify-between">
						<h1 className="text-5xl sm:text-5xl text-slate-900">
							You searched for 👉 "{searchQuery}"
						</h1>
						<br />
						<span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">
							Time of search : {searchTime.toUTCString()}
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
								<div className="flex flex-row-reverse mb-2">
									<SortMenu />
								</div>
								<section>
									<motion.div
										layout
										className="w-full grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-5  xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 "
									>
										<AnimatePresence>
											{productsFiltered.map((product) => (
												<Product
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
