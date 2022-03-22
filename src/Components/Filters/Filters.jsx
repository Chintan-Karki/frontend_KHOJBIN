import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Filters({
	productsData,
	filteredProductsData,
	setfilteredProductsData,
	selectedSellerSite,
	setSelectedSellerSite,
}) {
	const pillBtnClass =
		"transition ease-in-out duration-75 border-2 border-indigo-200 p-1  px-2 rounded-3xl text-xs text-gray-700 hover:bg-indigo-400 hover:text-white";
	const activePillBtnClass =
		"transition ease-in-out duration-75 border-2 border-indigo-400 p-1 px-2 rounded-3xl text-xs bg-indigo-400 text-white";

	useEffect(() => {
		if (selectedSellerSite === "All") {
			setfilteredProductsData(productsData);
			return;
		}
		const filteredProducts = productsData.filter(
			(product) =>
				product.sellerName.toString().toLowerCase() ===
				selectedSellerSite.toString().toLowerCase()
		);
		setfilteredProductsData(filteredProducts);
		console.log(filteredProducts);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedSellerSite]);

	return (
		<aside className="flex-shrink-0 hidden lg:block w-1/5 my-2 bg-white mr-10 p-6 pb-2 rounded-lg shadow-lg h-[500px]">
			<section className="border-b border-gray-300 pb-2 mb-4 flex items-center justify-between">
				<h2 className="font-semibold text-heading text-xl md:text-2xl">
					Filters
				</h2>
				<button
					className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
					aria-label="Clear All"
					onClick={() => setSelectedSellerSite("All")}
				>
					Clear All
				</button>
			</section>
			<motion.section
				layout
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.4 }}
				className="pb-2 mb-4 flex items-start justify-start flex-wrap gap-1 "
			>
				<button
					className={
						selectedSellerSite === "All" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("All")}
				>
					All{" "}
					{
						<span className="text-xs ">
							(<span>{productsData.length}</span>)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Daraz" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Daraz")}
				>
					Daraz{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									productsData.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() === "daraz"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Sastodeal"
							? activePillBtnClass
							: pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Sastodeal")}
				>
					Sastodeal{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									productsData.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() ===
											"sastodeal"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Hamrobazaar"
							? activePillBtnClass
							: pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Hamrobazaar")}
				>
					Hamrobazaar{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									productsData.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() ===
											"hamrobazaar"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
				<button
					className={
						selectedSellerSite === "Gyapu" ? activePillBtnClass : pillBtnClass
					}
					onClick={() => setSelectedSellerSite("Gyapu")}
				>
					Gyapu{" "}
					{
						<span className="text-xs ">
							(
							<span>
								{
									productsData.filter(
										(product) =>
											product.sellerName.toString().toLowerCase() === "gyapu"
									).length
								}
							</span>
							)
						</span>
					}
				</button>
			</motion.section>
		</aside>
	);
}
