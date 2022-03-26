import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import {
	daraz_filter,
	gyapu_filter,
	hamrobazaar_filter,
	sastodeal_filter,
} from "../../utils/data_filter";
import { dummy_data } from "../../utils/dummy_data";
import { useProductsStore, useSearchStore } from "../../utils/store";

export default function Search() {
	const { register, handleSubmit } = useForm();

	const setProducts = useProductsStore((state) => state.setProducts);
	const setProductsFiltered = useProductsStore(
		(state) => state.setProductsFiltered
	);
	const setSearch = useSearchStore((state) => state.setSearch);
	const [loading, setLoading] = useState(false);

	const twClasses = {
		mainDiv:
			"h-[80vh] relative flex flex-col justify-center items-center  md:flex-row w-screen",
		searchInputDiv:
			"rounded-lg p-4 m-2  h-12 border-t border-b border-l text-gray-800 bg-white md:w-6/12 w-11/12 min-w-12 shadow-lg shadow-indigo-500/50 max-w-md",
		searchButton:
			"py-2 m-2 border-none active:scale-90 transition ease-in-out duration-200 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-600 max-w-md",
	};

	let navigate = useNavigate();

	// eslint-disable-next-line no-unused-vars
	const getData = async (data, searchTime, userId) => {
		try {
			data = { ...data, searchTime, member: userId };
			setLoading(true);
			console.log(data);
			await setSearch(data);
			let postData = {
				member: userId,
				search_query: data.search_query,
			};
			console.log(postData);
			await axiosInstance.post(`search/`, postData).then((res) => {
				// console.log(res.data);
				setProducts(res.data);
				let filtered_daraz_data = daraz_filter(res.data.darazResponses);
				let filtered_hamrobazaar_data = hamrobazaar_filter(
					res.data.hamrobazaarResponses
				);
				let filtered_gyapu_data = gyapu_filter(res.data.gyapuResponses);
				let filtered_sastodeal_data = sastodeal_filter(
					res.data.sastodealResponses
				);
				setProductsFiltered([
					...filtered_daraz_data,
					...filtered_gyapu_data,
					...filtered_hamrobazaar_data,
					...filtered_sastodeal_data,
				]);
			});
			await setLoading(false);
			await navigate("/searchresults", { state: data });
		} catch (error) {
			console.log(error);
		}
	};

	// eslint-disable-next-line no-unused-vars
	const getDummyData = async (data, searchTime, userId) => {
		try {
			data = { ...data, searchTime, member: userId };
			console.log(data);
			setLoading(true);
			await setSearch(data);

			// console.log(res.data);
			setProducts(dummy_data);
			let filtered_daraz_data = daraz_filter(dummy_data.darazResponses);
			let filtered_hamrobazaar_data = hamrobazaar_filter(
				dummy_data.hamrobazaarResponses
			);
			let filtered_gyapu_data = gyapu_filter(dummy_data.gyapuResponses);
			let filtered_sastodeal_data = sastodeal_filter(
				dummy_data.sastodealResponses
			);
			setProductsFiltered([
				...filtered_daraz_data,
				...filtered_gyapu_data,
				...filtered_hamrobazaar_data,
				...filtered_sastodeal_data,
			]);
			await setLoading(false);
			await navigate("/searchresults", { state: data });
		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = async (data) => {
		let searchTime = new Date();
		let userId = localStorage.getItem("userId")
			? localStorage.getItem("userId")
			: "";

		if (data.searchQuery === "") {
			alert("Please fill the input box");
		} else {
			data = { ...data, searchTime, userId };
			//! FOR REAL-TIME DATA ::
			// getData(data, searchTime, userId);
			//* FOR DUMMY DATA ::
			getDummyData(data, searchTime, userId);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={twClasses.mainDiv}>
				<input
					{...register("search_query", {
						required: "Search Query is required",
						minLength: {
							value: 1,
							message: "Minimum 1 character required.",
						},
					})}
					className={twClasses.searchInputDiv}
					placeholder="eg. Iphone 13 pro 🙂"
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
