import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../atoms/NavBar";

export default function SearchResults() {
	const location = useLocation();
	let searchQuery = location.state.searchQuery;
	let searchTime = location.state.searchTime;
	return (
		<>
			<Navbar />
			<div className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
				<div className="container px-4 mx-auto items-center justify-between">
					<h1 className="text-7xl text-slate-900">
						You searched for "{searchQuery}"
					</h1>
					<br />
					<span>Time of search : {searchTime.toUTCString()}</span>
				</div>
			</div>
			;
		</>
	);
}
