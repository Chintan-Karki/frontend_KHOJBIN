import React from "react";

export default function Search() {
	return (
		<form
			className=" flex flex-col  justify-center items-center  md:flex-row w-screen"
			style={{ height: "90vh" }}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<input
				className="rounded-lg p-4 m-2 h-12 border-t border-b border-l text-gray-800 bg-white md:w-6/12 w-11/12 min-w-12 shadow-2xl max-w-md  "
				placeholder="Search 🙂"
			/>
			<button
				type="submit"
				onClick={(event) => event.preventDefault}
				className="py-2 m-2 rounded-lg h-12 md:w-36 w-11/12 bg-indigo-500  font-bold px-9 uppercase text-gray-50 border-t border-b border-r shadow-2xl max-w-md"
			>
				SEARCH
			</button>
		</form>
	);
}
