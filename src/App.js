import React from "react";
import Search from "./Components/atoms/Search";
import NavBar from "./Components/atoms/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<div className="SearchBar bg-image bg-no-repeat bg-contain sm:bg-auto bg-center  ">
				<Search />
			</div>
		</>
	);
}

export default App;
