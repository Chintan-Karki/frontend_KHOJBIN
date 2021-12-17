import React from "react";

export default function WarningMessage({ message }) {
	return (
		<div
			className="bg-yellow-50 border text-sm border-yellow-400 text-yellow-700 mt-3 px-4 py-2 rounded relative"
			role="alert"
		>
			<strong className="font-bold ">Wait!</strong>
			<span className="block sm:inline"> {message}</span>
		</div>
	);
}
