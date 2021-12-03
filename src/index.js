import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LogIn from "./Components/LogIn/index";
import SignUp from "./Components/SignUp/Index";
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<LogIn />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
