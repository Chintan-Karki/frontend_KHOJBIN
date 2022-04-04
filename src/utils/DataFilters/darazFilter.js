export function daraz_filter(daraz_data) {
	let filteredDarazData = [];
	daraz_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name;
		newObj.price = Number(item.price).toString();
		newObj.itemId = item.itemId;
		newObj.image_url = item.image;
		newObj.description = item.description;
		newObj.productUrl = item.productUrl;
		newObj.ratingScore = item.ratingScore.toString().substring(0, 4);
		newObj.reviewCount = item.review;
		// newObj.sellerName = item.sellerName;
		newObj.sellerName = "Daraz";
		newObj.sellerImageUrl =
			"https://icms-image.slatic.net/images/ims-web/458d4688-ae26-4e6d-8f39-c26194de228a.png";
		filteredDarazData.push(newObj);
	});
	return filteredDarazData;
}
