import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../atoms/NavBar";
import Product from "../Products/Product";

export default function SearchResults() {
	const location = useLocation();
	let searchQuery = location.state.searchQuery
		? location.state.searchQuery
		: "";
	let searchTime = location.state.searchTime ? location.state.searchTime : "";
	let [loading, setLoading] = useState(true);

	let [products, setProducts] = useState([]);
	useEffect(() => {
		const apiUrl = "http://127.0.0.1:8000/api/products/";
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.then(() => console.log(products))
			.finally(() => setLoading(false));
		// eslint-disable-next-line
	}, [setProducts]);

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
						</span>
						{products.length < 1 ? (
							<h1 className="text-xl sm:text-2xl  md:text-6xl mt-10">
								Sorry, No items could be found
							</h1>
						) : null}
						<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 ">
							{products.map((product) => (
								<Product
									key={product.id}
									product={product}
									altText={product.name}
									seller={product.seller.name}
									ratingPer5="3"
									price={product.price}
									searchQuery={searchQuery}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
