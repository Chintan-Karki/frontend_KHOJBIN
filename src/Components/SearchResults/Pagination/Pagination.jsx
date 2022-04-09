import React from "react";

export default function Pagination({
	pageNumbers,
	currentPage,
	setCurrentPage,
	productsFiltered,
	currentPosts,
}) {
	return (
		<>
			<div className="w-full flex justify-start mt-10 gap-1 flex-wrap">
				{pageNumbers.map((pageNum, index) => (
					<span
						key={index}
						className={
							pageNum === currentPage
								? "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-md bg-indigo-500 text-white"
								: "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-md bg-white hover:bg-slate-100"
						}
						onClick={() => {
							window.scrollTo(0, 0);
							setCurrentPage(pageNum);
						}}
					>
						{pageNum}
					</span>
				))}
			</div>
			<div className="text-sm mt-2 text-gray-700">
				Showing{" "}
				<b>
					{currentPosts.length * currentPage - currentPosts.length + 1} to{" "}
					{currentPosts.length * currentPage} of {productsFiltered.length}
				</b>{" "}
				products.
			</div>
		</>
	);
}
