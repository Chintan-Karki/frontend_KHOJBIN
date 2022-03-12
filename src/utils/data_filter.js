function gyapu_filter(gyapu_data) {
	let filteredGyapuData = [];
	// description: []
	// image_url: "https://static-01.daraz.com.np/p/4e43a2b5132f03d3cae8c1d8ba502bd9.jpg"
	// itemId: "106137527"
	// name: "Nillkin Matte Case  for Apple iPhone SE (2020) Super Frosted Shield Cover"
	// price: "900.00"
	// productUrl: "//www.daraz.com.np/products/nillkin-matte-case-for-apple-iphone-se-2020-super-frosted-shield-cover-i106137527-s1027979030.html?search=1"
	// ratingScore: "0"
	// reviewCount: "0"
	// sellerName: "246Impex"
	gyapu_data.map((item) => {
		let newObj = {};
		newObj.name = item.name.replace("<b>", "").replace("</b>", "");
		newObj.price = item.min_sales_price;
		newObj.itemId = item._id;
		newObj.image_url = "https://www.gyapu.com/" + item.image[0].document.path;
		newObj.description = "";
		newObj.productUrl = "https://www.gyapu.com/" + item.url_key;
		newObj.ratingScore = item.confidenceScore.toString().substring(0, 4);
		newObj.reviewCount = "";
		newObj.sellerName = "Gyapu";
		filteredGyapuData.push(newObj);
	});
	return filteredGyapuData;
}

export default gyapu_filter;
