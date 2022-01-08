import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../atoms/NavBar";
import Product from "../Products/Product";

export default function SearchResults() {
	const location = useLocation();
	let searchQuery = location.state.searchQuery
		? location.state.searchQuery
		: "";
	let searchTime = location.state.searchTime ? location.state.searchTime : "";
	let productsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let seller = "daraz";
	return (
		<>
			<Navbar />
			{(searchQuery !== "") | (searchTime !== "") ? (
				<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
					<div className="container px-4 mx-auto items-center justify-between">
						<h1 className="text-2xl sm:text-5xl text-slate-900">
							You searched for "{searchQuery}"
						</h1>
						<br />
						<span>Time of search : {searchTime.toUTCString()}</span>
						<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
							{productsArray.map((product) => (
								<Product
									product={product}
									altText={seller}
									seller={seller}
									ratingPer5="3"
									price={product}
									searchQuery={searchQuery}
								/>
							))}
						</div>
					</div>
				</div>
			) : (
				<h1>No search query found</h1>
			)}
		</>
	);
}
