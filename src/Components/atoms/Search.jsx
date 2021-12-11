import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Search() {
	const { register, handleSubmit } = useForm();

	const twClasses = {
		mainDiv:
			"h-[90vh] relative flex flex-col justify-center items-center  md:flex-row w-screen",
		searchInputDiv:
			"rounded-lg p-4 m-2  h-12 border-t border-b border-l text-gray-800 bg-white md:w-6/12 w-11/12 min-w-12 shadow-lg shadow-indigo-500/30 max-w-md",
		searchButton:
			"py-2 m-2 border-none active:scale-90 transition ease-in-out duration-200 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-lg shadow-indigo-500/30 max-w-md",
	};

	const onSubmit = (data) => {
		let searchTime = new Date();
		if (data.searchQuery === "") {
			alert("Please fill the inputbox");
		} else {
			data = { ...data, searchTime };
			console.log(data);
			alert(JSON.stringify(data));
			window.history.pushState({}, undefined, "/searchresults");
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
					SEARCH
				</button>
				<Link to="/searchresults">Test</Link>
			</div>
		</form>
	);
}
