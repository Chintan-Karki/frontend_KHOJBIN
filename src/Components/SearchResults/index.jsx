import React from "react";
import Navbar from "../atoms/NavBar";

export default function SearchResults() {
	return (
		<>
			<Navbar />
			<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
				<h1 className="container text-5xl px-4 mx-auto flex flex-wrap items-center justify-between">
					This is the Search Results page
				</h1>
			</div>
			;
		</>
	);
}
