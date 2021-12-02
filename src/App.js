import React from "react";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";

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
