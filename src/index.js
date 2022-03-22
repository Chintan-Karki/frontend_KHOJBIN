import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LogIn from "./Components/LogIn/index";
import SearchResults from "./Components/SearchResults/index";
import SignUp from "./Components/SignUp/Index";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Profile/Profile";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/searchresults" element={<SearchResults />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<LogIn />} />
			<Route path="/profile" element={<Profile />} />
			<Route
				path="*"
				element={
					<main className="p-4">
						<p>There's nothing here!</p>
					</main>
				}
			/>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
