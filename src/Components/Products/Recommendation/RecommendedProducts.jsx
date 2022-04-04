import React, { useState, useEffect } from "react";
import _ from "lodash";
import Recommender from "../../../Services/RecommenderService";
import Product from "../Product";

export default function RecommendedProducts({
	currentProduct,
	productsFiltered,
}) {
	// console.log(currentProduct, productsFiltered)
	let [recommendations, setRecommendations] = useState([]);
	let [loading, setLoading] = useState(true);

	async function getRecommendations(
		currentProduct,
		generateRecommendationsList,
		size
	) {
		let recommendationsGenerated = await Recommender(
			currentProduct,
			generateRecommendationsList,
			size
		);
		console.log(recommendationsGenerated);
		setRecommendations(recommendationsGenerated);
		setLoading(false);
	}

	useEffect(() => {
		// setLoading(true);
		try {
			let generateRecommendationsList = _.filter(
				productsFiltered,
				(obj) => obj.name !== currentProduct.name
			);
			getRecommendations(currentProduct, generateRecommendationsList, 4);
			console.log([...recommendations], currentProduct);
		} catch (error) {
			setRecommendations([]);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentProduct, productsFiltered]);

	return (
		<div>
			<h1 className="text-3xl my-12 mb-8 text-gray-700">Recommended Products</h1>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="grid grid-cols-1  xs:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-5  xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ">
					{recommendations.length !== 0 ? (
						recommendations.map((product) => <Product product={product} />)
					) : (
						<div>No recommendations</div>
					)}
				</div>
			)}
		</div>
	);
}
