import React from "react";

export default function SearchDetailHeader({ searchQuery, searchTime }) {
	return (
		<div className="container px-4 mx-auto items-center justify-between">
			<h1 className="text-xl sm:text-3xl lg:text-5xl text-slate-900">
				You searched for 👉 "{searchQuery}"
			</h1>
			<br />
			<span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent ">
				Time of search : {searchTime}
				<hr></hr>
			</span>
		</div>
	);
}
