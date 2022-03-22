import React from "react";

export default function Sort({
	sortOrder,
	setSortOrder,
	filteredProductsData,
	setfilteredProductsData,
}) {
	let sortBtnClass =
		"bg-white hover:bg-slate-700 hover:text-slate-50 py-2 px-4 shadow-sm text-sm font-light text-indigo-900 border border-transparent rounded-lg focus:outline-none";
	let activeSortBtnClass =
		"bg-slate-700 text-slate-50 py-2 px-4 shadow-sm text-sm font-light text-indigo-900 border border-transparent rounded-lg focus:outline-none";

	return (
		<section className="my-2 gap-2 flex flex-row justify-end">
			<button
				type="button"
				className={
					sortOrder === "Ascending" ? activeSortBtnClass : sortBtnClass
				}
				onClick={() => {
					setSortOrder("Ascending");
					let sortedProducts = filteredProductsData.sort((a, b) => {
						return a.price - b.price;
					});
					setfilteredProductsData(sortedProducts);
				}}
			>
				Ascending
			</button>

			<button
				type="button"
				className={
					sortOrder === "Descending" ? activeSortBtnClass : sortBtnClass
				}
				onClick={() => {
					setSortOrder("Descending");
					let sortedProducts = filteredProductsData.sort((a, b) => {
						return b.price - a.price;
					});
					setfilteredProductsData(sortedProducts);
				}}
			>
				Descending
			</button>
		</section>
	);
}
