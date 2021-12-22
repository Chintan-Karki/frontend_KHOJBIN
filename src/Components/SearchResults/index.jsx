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
	let productsArray = [1, 2, 3, 4, 5];
	return (
		<>
			<Navbar />
			{(searchQuery !== "") | (searchTime !== "") ? (
				<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
					<div className="container px-4 mx-auto items-center justify-between">
						<h1 className="text-7xl text-slate-900">
							You searched for "{searchQuery}"
						</h1>
						<br />
						<span>Time of search : {searchTime.toUTCString()}</span>
						{productsArray.map((product) => (
							<Product product={product} />
						))}
					</div>
				</div>
			) : (
				<h1>No search query found</h1>
			)}
		</>
	);
}
