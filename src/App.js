import React from "react";
import Search from "./Components/atoms/Search";
import NavBar from "./Components/atoms/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<div className="SearchBar bg-image bg-center bg-no-repeat bg-90% md:bg-80% lg:bg-50% xl:bg-40%">
				<Search />
			</div>
		</>
	);
}

export default App;
