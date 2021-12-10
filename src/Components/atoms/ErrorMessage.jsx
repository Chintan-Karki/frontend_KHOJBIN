import React from "react";

export default function ErrorMessage({ message }) {
	return (
		<div
			className="bg-red-100 border text-sm border-red-400 text-red-700 mt-3 px-4 py-2 rounded relative"
			role="alert"
		>
			<strong className="font-bold ">Oops!</strong>
			<span className=" ml-2 block sm:inline">{message}</span>
		</div>
	);
}
