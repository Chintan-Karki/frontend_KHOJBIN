// *
// * Demo data :
// 	description: []
// image_url: "https://static-01.daraz.com.np/p/4e43a2b5132f03d3cae8c1d8ba502bd9.jpg"
// itemId: "106137527"
// name: "Nillkin Matte Case  for Apple iPhone SE (2020) Super Frosted Shield Cover"
// price: "900.00"
// productUrl: "//www.daraz.com.np/products/nillkin-matte-case-for-apple-iphone-se-2020-super-frosted-shield-cover-i106137527-s1027979030.html?search=1"
// ratingScore: "0"
// reviewCount: "0"
// sellerName: "246Impex"
// *

export function gyapu_filter(gyapu_data) {
	let filteredGyapuData = [];
	gyapu_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name.replace("<b>", "").replace("</b>", "");
		newObj.price = Number(item.min_sales_price).toString();
		newObj.itemId = item._id;
		newObj.image_url = "https://www.gyapu.com/" + item.image[0].document.path;
		newObj.description = "";
		newObj.productUrl = "https://www.gyapu.com/detail/" + item.url_key;
		newObj.ratingScore =
			item.confidenceScore < 5
				? item.confidenceScore.toString().substring(0, 4)
				: "0";
		newObj.reviewCount = "unknown";
		newObj.sellerName = "Gyapu";
		newObj.sellerImageUrl =
			"https://www.gyapu.com/806b0f041fef60968c877fe5b54014cb.svg";

		filteredGyapuData.push(newObj);
	});
	return filteredGyapuData;
}

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

export function sastodeal_filter(sastodeal_data) {
	let filteredSastodealData = [];
	sastodeal_data.forEach((item) => {
		let newObj = {};
		newObj.name = item.name;
		// newObj.price = item.price;
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
		// newObj.description = item.custom_attributes[1].value;
		newObj.description = item.custom_attributes
			.filter((item) => item.attribute_code === "description")
			.map((item) => item.value)
			.toString()
			.replace(/(<([^>]+)>)/gi, "");
		// let sastodealProductUrl =
		// 	item.name.toString().substring(0, 75).toLowerCase().replaceAll(" ", "-") +
		// 	"-" +
		// 	item.sku.toString().toLowerCase().replaceAll(" ", "-") +
		// 	".html";
		// newObj.productUrl = "https://www.sastodeal.com/" + sastodealProductUrl;
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
		newObj.sellerImageUrl = "https://beta.hamrobazaar.com/icon-192x192.png";
		filteredHamrobazaarData.push(newObj);
	});
	return filteredHamrobazaarData;
}
