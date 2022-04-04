import React from "react";
import { useNavigate } from "react-router-dom";
import { useProductsStore } from "../../utils/store";

export default function BreaCrumb() {
	let currentProduct = useProductsStore((state) => state.currentProduct);
	let navigate = useNavigate();

	const goBack = () => {
		navigate("/searchresults");
	};
	return (
		<div className="flex items-center container mx-auto px-4 text-gray-500">
			<ol className="flex items-center flex-wrap">
				<li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading hover:text-indigo-400">
					<a href="/">Home</a>
				</li>
				<li className="text-base text-body mt-0.5">/</li>
				<li className="text-sm text-body px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading hover:text-indigo-400">
					<p className="capitalize cursor-pointer" onClick={goBack}>
						search results
					</p>
				</li>
				<li className="text-base text-body mt-0.5">/</li>
				<li className="text-sm text-body px-2.5 transition capitalize duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading">
					product ({currentProduct.itemId})
				</li>
			</ol>
		</div>
	);
}
