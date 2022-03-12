import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import { useProductsStore, useSearchStore } from "../../utils/store";

export default function Search() {
	const { register, handleSubmit } = useForm();
	const setProducts = useProductsStore((state) => state.setProducts);
	const setSearch = useSearchStore((state) => state.setSearch);
	const [loading, setLoading] = useState(false);

	const twClasses = {
		mainDiv:
			"h-[90vh] relative flex flex-col justify-center items-center  md:flex-row w-screen",
		searchInputDiv:
			"rounded-lg p-4 m-2  h-12 border-t border-b border-l text-gray-800 bg-white md:w-6/12 w-11/12 min-w-12 shadow-lg shadow-indigo-500/50 max-w-md",
		searchButton:
			"py-2 m-2 border-none active:scale-90 transition ease-in-out duration-200 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-600 max-w-md",
	};

	let navigate = useNavigate();

	const onSubmit = async (data) => {
		let searchTime = new Date();
		let userId = localStorage.getItem("userId")
			? localStorage.getItem("userId")
			: "";

		if (data.searchQuery === "") {
			alert("Please fill the input box");
		} else {
			data = { ...data, searchTime, userId };
			setLoading(true);
			await setSearch(data);
			await axiosInstance.post(`search/`, data).then((res) => {
				// console.log(res.data);
				setProducts(res.data);
			});
			await setLoading(false);
			await navigate("/searchresults", { state: data });
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={twClasses.mainDiv}>
				<input
					{...register("searchQuery")}
					className={twClasses.searchInputDiv}
					placeholder="Search 🙂"
				/>
				<button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					className={twClasses.searchButton}
				>
					{/* Search */}
					{!loading ? (
						"SEARCH"
					) : (
						<div className="flex justify-center items-center">
							<div
								className="spinner-border animate-spin inline-block w-2 h-8 border-4 rounded-md text-gray-50"
								role="status"
							></div>
						</div>
					)}
				</button>
			</div>
		</form>
	);
}
