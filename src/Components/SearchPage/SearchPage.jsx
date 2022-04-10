import React from "react";
import Search from "./Search";
import Footer from "../Footer/index";

export default function SearchPage() {
	return (
		<>
			<div className="SearchBar bg-image bg-center bg-no-repeat bg-90% md:bg-80% lg:bg-50% xl:bg-40%">
				<Search />
			</div>
			<Footer />
		</>
	);
}
