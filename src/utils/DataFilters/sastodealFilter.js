export function sastodeal_filter(sastodeal_data) {
	let filteredSastodealData = [];
	sastodeal_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name;
		newObj.price = item.custom_attributes
			.filter((item) => item.attribute_code === "special_price")
			.map((item) => item.value)
			.toString()
			? Number(
					item.custom_attributes
						.filter((item) => item.attribute_code === "special_price")
						.map((item) => item.value)
						.toString()
			  ).toString()
			: Number(item.price);
		newObj.itemId = item.id;
		newObj.image_url = item.extension_attributes.full_image_url;
		newObj.description = item.custom_attributes
			.filter((item) => item.attribute_code === "description")
			.map((item) => item.value)
			.toString()
			.replace(/(<([^>]+)>)/gi, "");
		newObj.productUrl =
			"https://www.sastodeal.com/" +
			item.custom_attributes
				.filter((item) => item.attribute_code === "url_key")
				.map((item) => item.value)
				.toString() +
			".html";
		newObj.ratingScore = "0";
		newObj.reviewCount = "0";
		newObj.sellerName = "Sastodeal";
		newObj.sellerImageUrl =
			"https://www.sastodeal.com/media/logo/stores/1/SDLogo_White-Logo.png";
		filteredSastodealData.push(newObj);
	});
	return filteredSastodealData;
}
