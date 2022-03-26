import { motion } from "framer-motion";
import React from "react";

export default function WishedItem({ item, onDelete }) {
	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 1 }}
			exit={{ scale: 0 }}
			transition={{ duration: 0.5 }}
			className=" bg-white border border-white shadow-lg rounded-3xl w-full p-4 xl:w-[600px]"
		>
			<div className="flex-none sm:flex">
				<div className=" relative rounded-xl flex items-center sm:w-36bg-white">
					<img
						src={item.image_url ? item.image_url : "ImageNotFound"}
						alt={item.name}
						className=" h-36 sm:w-36 w-full border-2 border-indigo-100 max-w-none object-scale-down rounded-2xl"
					/>
					<button
						onClick={(e) => onDelete(e, item)}
						className="absolute -right-2 bottom-2 -ml-3  text-white p-2 text-xs bg-red-400 shadow-md shadow-red-200 hover:bg-red-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col sm:ml-5 justify-between w-full">
					<div className="flex items-center justify-between mt-2">
						<div className="flex items-center l">
							<div className="flex flex-col">
								<span
									alt={item.name}
									className="text-md font-medium uppercase leading-tight"
								>
									{item.name}
								</span>
								<div className="flex-auto text-gray-500 my-1">
									<span className="mr-3 ">Rs. {item.price}</span>
									<span className="mr-3 border-r border-gray-200  max-h-0" />
									<span>{item.seller_name}</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-5 w-5 text-yellow-500"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<span className="text-yellow-500 text-sm ml-2 justify-center">
								{item.rating_score === "0"
									? "Not Rated Yet"
									: item.rating_score}
							</span>
						</div>
					</div>
					<div className="flex pt-2 mt-3 text-sm text-gray-500">
						<div className="flex-1 inline-flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 mr-3"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
								/>
							</svg>
							<p>Added on {item.date_created.substring(0, 10)}</p>
						</div>

						<a
							href={item.product_url}
							target="_blank"
							className="flex-no-shrink bg-indigo-600 hover:bg-indigo-700 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 hover:border-indigo-900 text-white rounded-full transition ease-in duration-150"
							rel="noreferrer"
						>
							Go to store
						</a>
					</div>
				</div>
			</div>
			{/* </div> */}
		</motion.div>
	);
}
