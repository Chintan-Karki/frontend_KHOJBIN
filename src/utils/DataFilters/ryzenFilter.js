export function ryzen_filter(ryzen_data) {
	let filteredRyzenData = [];
	ryzen_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name;
		newObj.price = Number(item.default_price).toString();
		newObj.itemId = item.product_id;
		newObj.image_url =
			"https://ecommerce.thexpresstimes.com/uploads/" +
			item.product_images[0].image_value;
		newObj.description = item.description;
		newObj.productUrl =
			"https://ecommerce.thexpresstimes.com/product/" + item.slug;
		newObj.ratingScore = "0";
		newObj.reviewCount = "0";
		newObj.sellerName = "Ryzen";
		newObj.sellerImageUrl =
			"https://ecommerce.thexpresstimes.com/uploads/logo.png";
		filteredRyzenData.push(newObj);
	});
	return filteredRyzenData;
}
