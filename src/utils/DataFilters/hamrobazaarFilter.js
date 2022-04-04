export function hamrobazaar_filter(hamrobazaar_data) {
	let filteredHamrobazaarData = [];
	hamrobazaar_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name;
		newObj.price = Number(item.price).toString();
		newObj.itemId = item.id;
		newObj.image_url = item.imageUrl;
		newObj.description = item.description;
		newObj.productUrl =
			"https://beta.hamrobazaar.com/product/" +
			item.name.replaceAll(" ", "-") +
			"/" +
			item.id +
			"/";
		newObj.ratingScore = "0";
		newObj.reviewCount = item.totalViews;
		newObj.sellerName = "Hamrobazaar";
		newObj.sellerImageUrl = "https://hamrobazaar.com/icon-192x192.png";
		filteredHamrobazaarData.push(newObj);
	});
	return filteredHamrobazaarData;
}
