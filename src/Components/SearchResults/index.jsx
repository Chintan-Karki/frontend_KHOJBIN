import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import loaderGif from "../../assets/images/loaderLogo.gif";

import {
	useProductsStore,
	useSearchStore,
	useSortStore,
} from "../../utils/store";
import Product from "../Products/Product";

import Filters from "../Filters/Filters";
import SortMenu from "../Filters/SortMenu";
import ProductListView from "../Products/ProductListView";
import SearchDetailHeader from "./SearchDetailHeader";
import ViewChange from "./ViewChange";
import Pagination from "./Pagination/Pagination";

export default function SearchResults() {
	let searchTime = useSearchStore((state) => state.search.searchTime) || 0;
	let searchQuery = useSearchStore((state) => state.search.search_query);
	let [loading, setLoading] = useState(true);

	let gridView = useProductsStore((state) => state.gridView);
	let setGridView = useProductsStore((state) => state.setGridView);

	//* From Stores
	let setPriceRange = useSortStore((state) => state.setPriceRange);

	// Passed to sorting
	let productsFiltered = useProductsStore((state) => state.productsFiltered);

	// Setting up the product's data
	let productsData = useProductsStore((state) => state.productsFiltered);

	// For redirecting to certain pages
	const navigate = useNavigate();
	let currentPage = useSortStore((state) => state.currentPage);
	let setCurrentPage = useSortStore((state) => state.setCurrentPage);
	let [postsPerPage, setPostsPerPage] = useState(8);

	//Get currentPosts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = productsFiltered.slice(
		indexOfFirstPost,
		indexOfLastPost
	);

	//Implement page numbers
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(productsFiltered.length / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	useEffect(() => {
		setCurrentPage(1);
		if (productsData.length === 0) {
			navigate("/");
			return;
		}
		let min = Math.min(...productsData.map((item) => item.price));
		let max = Math.max(...productsData.map((item) => item.price));

		setPriceRange([min, max]);

		setTimeout(() => {
			setLoading(false);
		}, 500);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate, productsData.length]);

	return (
		<>
			<SearchDetailHeader searchQuery={searchQuery} searchTime={searchTime} />

			{loading ? (
				<div className="main-loader h-[20vh]">
					<div className="loader flex items-center justify-center h-full">
						<img src={loaderGif} alt="loader" className="h-12" />
					</div>
				</div>
			) : (
				<>
					{/* <div className="mx-auto relative flex flex-wrap items-center justify-between px-2 py-3 mb-3"> */}
					<div className="mx-auto relative ">
						<div className="container px-4 mx-auto   items-center justify-between">
							{productsData.length < 1 ? (
								<h1 className="text-xl sm:text-2xl  md:text-6xl mt-10">
									Sorry, No items could be found
								</h1>
							) : null}
							<div className="flex pt-8 pb-16 lg:pb-20 ">
								<Filters />
								<div className="flex flex-col w-full">
									<div className="flex flex-row-reverse mb-2 ">
										<SortMenu />
										<ViewChange gridView={gridView} setGridView={setGridView} />
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
													? currentPosts.map((product) => (
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
													: currentPosts.map((product) => (
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
									<Pagination
										pageNumbers={pageNumbers}
										currentPage={currentPage}
										setCurrentPage={setCurrentPage}
										postsPerPage={postsPerPage}
										productsFiltered={productsFiltered}
										setPostsPerPage={setPostsPerPage}
										currentPosts={currentPosts}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
