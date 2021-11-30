import React from "react";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";

function App() {
	return (
		<section className="h-screen ">
			<NavBar/>
			<div className="SearchBar bg-image bg-no-repeat bg-contain sm:bg-auto bg-center -m-8 ">
				<Search />
			</div>
		</section>
	);
}

export default App;
