import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useProductsStore } from "../../utils/store";
import Filters from "../atoms/Filters";
import Navbar from "../atoms/NavBar";
import Product from "../Products/Product";

export default function SearchResults() {
	const location = useLocation();

	let searchQuery = location.state.searchQuery
		? location.state.searchQuery
		: "No search queries found";

	let searchTime = location.state.searchTime ? location.state.searchTime : "";
	let [loading, setLoading] = useState(true);
	let productsData = useProductsStore((state) => state.productsFiltered);
	const navigate = useNavigate();

	let sortAscending = () => {
		productsData.sort((a, b) => {
			return b.price - a.price;
		});
	};

	useEffect(() => {
		if (productsData.length === 0) {
			navigate("/");
		} else {
			setLoading(false);

			// *
			// * DEMO RESPONSE
			// *
			// description: []
			// image_url: "https://static-01.daraz.com.np/p/4e43a2b5132f03d3cae8c1d8ba502bd9.jpg"
			// itemId: "106137527"
			// name: "Nillkin Matte Case  for Apple iPhone SE (2020) Super Frosted Shield Cover"
			// price: "900.00"
			// productUrl: "//www.daraz.com.np/products/nillkin-matte-case-for-apple-iphone-se-2020-super-frosted-shield-cover-i106137527-s1027979030.html?search=1"
			// ratingScore: "0"
			// reviewCount: "0"
			// sellerName: "246Impex"

			// *
			// * TEST FETCH
			// *
			// const apiUrl = "http://127.0.0.1:8000/api/products/";
			// fetch(apiUrl)
			// 	.then((response) => response.json())
			// 	.then((data) => setProducts(data))
			// 	.finally(() => setLoading(false));
		}
		// eslint-disable-next-line
	}, [productsData]);

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
							<button
								className="text-blue-100 bg-slate-500 p-2 rounded-lg mt-2 "
								onClick={sortAscending}
							>
								test sort ascending
							</button>
						</span>
						{productsData.length < 1 ? (
							<h1 className="text-xl sm:text-2xl  md:text-6xl mt-10">
								Sorry, No items could be found
							</h1>
						) : null}
						<div className="flex pt-8 pb-16 lg:pb-20">
							<Filters />
							{/* <div className="w-full lg:ml-6 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 "> */}
							{/* <div className="w-full grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
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
								))} */}
							{/* </div> */}
							<div className="transition ease-in-out delay-150 w-full grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
								{productsData.map((product) => (
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
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
