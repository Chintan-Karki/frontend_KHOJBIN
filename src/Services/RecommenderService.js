// import similarity from "compute-cosine-similarity";
import native_similarity_calculator from "./CosineSim";

function Recommender(mainObj, remainingArray, numberOfRecommendations = 5) {
	var result = [];
	if (
		[
			Number(isNaN(mainObj.ratingScore) ? 0 : mainObj.ratingScore),
			Number(isNaN(mainObj.price) ? 0 : mainObj.price),
		] === [0, 0]
	) {
		return [];
	} else {
		for (var i = 0; i < remainingArray.length; i++) {
			// result.push(similarity)

			result.push(
				native_similarity_calculator(
					[
						Number(mainObj.ratingScore ? 1 : mainObj.ratingScore),
						Number(isNaN(mainObj.price) ? 1 : mainObj.price),
					],
					[
						Number(
							isNaN(remainingArray[i].ratingScore)
								? "1"
								: remainingArray[i].ratingScore
						),
						Number(
							isNaN(remainingArray[i].price) ? "1" : remainingArray[i].price
						),
					]
				)
			);
		}

		var sorted = [...new Set([...result].sort((a, b) => b - a))];
		let returnArray = [];
		for (var j = 0; j < numberOfRecommendations; j++) {
			returnArray.push(remainingArray[result.indexOf(sorted[j])]);
		}

		return [...returnArray];
	}
}

export default Recommender;
