import React from "react";
import Search from "./Components/atoms/Search";
import NavBar from "./Components/atoms/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<div className="SearchBar bg-image lg:bg-40% bg-no-repeat bg-90% sm:bg-contain bg-center">
				<Search />
			</div>
		</>
	);
}

export default App;
