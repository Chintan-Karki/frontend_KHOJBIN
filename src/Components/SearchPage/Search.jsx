import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios/axios";
import loaderLogo from "../../assets/images/loaderLogo.gif";

// Filters for the search data
import { ryzen_filter } from "../../utils/DataFilters/ryzenFilter";
import { daraz_filter } from "../../utils/DataFilters/darazFilter";
import { gyapu_filter } from "../../utils/DataFilters/gyapuFilter";
import { hamrobazaar_filter } from "../../utils/DataFilters/hamrobazaarFilter";
import { sastodeal_filter } from "../../utils/DataFilters/sastodealFilter";

// For dummy data
import { dummy_data } from "../../utils/dummy_data";
import { useProductsStore, useSearchStore } from "../../utils/store";
import { sortProductListBySeller } from "../../Services/SortBySeller";

export default function Search() {
	const { register, handleSubmit } = useForm();
	let sellerOrder = useProductsStore((state) => state.sellerOrder);
	console.log(sellerOrder);

	const setProducts = useProductsStore((state) => state.setProducts);
	const setProductsFiltered = useProductsStore(
		(state) => state.setProductsFiltered
	);
	const setSearch = useSearchStore((state) => state.setSearch);
	const [loading, setLoading] = useState(false);

	const twClasses = {
		mainDiv:
			" h-[80vh] relative flex flex-col justify-center items-center  md:flex-row mx-auto",
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
				let filtered_ryzen_data = ryzen_filter(res.data.ryzenResponses);
				let filtered_daraz_data = daraz_filter(res.data.darazResponses);
				let filtered_hamrobazaar_data = hamrobazaar_filter(
					res.data.hamrobazaarResponses
				);
				let filtered_gyapu_data = gyapu_filter(res.data.gyapuResponses);
				let filtered_sastodeal_data = sastodeal_filter(
					res.data.sastodealResponses
				);

				let filtered_data = [
					...filtered_daraz_data,
					...filtered_gyapu_data,
					...filtered_ryzen_data,
					...filtered_hamrobazaar_data,
					...filtered_sastodeal_data,
				];

				setProductsFiltered(
					sortProductListBySeller(filtered_data, sellerOrder)
				);
			});
			await setLoading(false);
			await navigate("/searchresults", { state: data });
		} catch (error) {
			setLoading(false);
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
			let filtered_ryzen_data = ryzen_filter(dummy_data.ryzenResponses);
			let filtered_daraz_data = daraz_filter(dummy_data.darazResponses);
			let filtered_hamrobazaar_data = hamrobazaar_filter(
				dummy_data.hamrobazaarResponses
			);
			let filtered_gyapu_data = gyapu_filter(dummy_data.gyapuResponses);
			let filtered_sastodeal_data = sastodeal_filter(
				dummy_data.sastodealResponses
			);

			let filtered_data = [
				...filtered_daraz_data,
				...filtered_gyapu_data,
				...filtered_ryzen_data,
				...filtered_hamrobazaar_data,
				...filtered_sastodeal_data,
			];

			setProductsFiltered(sortProductListBySeller(filtered_data, sellerOrder));
			await setLoading(false);
			await navigate("/searchresults", { state: data });
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	const onSubmit = async (data) => {
		let search_time_ = new Date();
		let searchTime =
			search_time_.toLocaleTimeString() +
			", " +
			search_time_.toLocaleDateString();

		if (data.searchQuery === "") {
			alert("Please fill the input box");
		} else {
			let userId = localStorage.getItem("userId");
			console.log(userId);

			data = { ...data, searchTime, userId };
			console.log(data);
			//! FOR REAL-TIME DATA ::
			getData(data, searchTime, userId);
			//* FOR DUMMY DATA ::
			// getDummyData(data, searchTime, userId);
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
					enterKeyHint="search"
					className={twClasses.searchInputDiv}
					placeholder="eg. Iphone 13 pro 🙂"
				/>
				<button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					className={
						loading
							? "py-2 m-2 border-none active:scale-90 transition ease-in-out duration-200 rounded-lg h-12 md:w-36 w-11/12 bg-white  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-none  max-w-md  cursor-wait"
							: "py-2 m-2 border-none active:scale-90 transition ease-in-out duration-200 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-lg hover:shadow-indigo-500/50 hover:bg-indigo-600 max-w-md"
					}
				>
					{/* Search */}
					{!loading ? (
						"SEARCH"
					) : (
						<div className="flex justify-center items-center  w-full h-full">
							<img src={loaderLogo} alt="loader" className="h-8" />
						</div>
					)}
				</button>
			</div>
		</form>
	);
}
