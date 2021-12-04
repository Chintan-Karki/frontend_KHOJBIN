import React from "react";
import { useForm } from "react-hook-form";

export default function Search() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		let searchTime = new Date();
		if (data.searchQuery === "") {
			alert("Please fill the inputbox");
		} else {
			data = { ...data, searchTime };
			console.log(data);
			alert(JSON.stringify(data));
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				style={{ height: "90vh" }}
				className="relative flex flex-col  justify-center items-center  md:flex-row w-screen"
			>
				<input
					{...register("searchQuery")}
					className=" rounded-lg p-4 m-2  h-12 border-t border-b border-l text-gray-800 bg-white md:w-6/12 w-11/12 min-w-12 shadow-2xl max-w-md  "
					placeholder="Search 🙂"
				/>
				<button
					type="submit"
					onClick={handleSubmit(onSubmit)}
					className="py-2 m-2 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-2xl max-w-md"
				>
					SEARCH
				</button>
			</div>
		</form>
	);
}
