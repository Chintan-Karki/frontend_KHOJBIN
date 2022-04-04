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
		newObj.reviewCount = "0";
		newObj.sellerName = "Gyapu";
		newObj.sellerImageUrl =
			"https://www.gyapu.com/806b0f041fef60968c877fe5b54014cb.svg";

		filteredGyapuData.push(newObj);
	});
	return filteredGyapuData;
}