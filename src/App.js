import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { useProductsStore } from "./utils/store";

// Getting route pages
import NavBar from "./Components/NavBar/NavBar";
import SearchPage from "./Components/SearchPage/SearchPage";
import LogIn from "./Components/LogIn/index";
import SearchResults from "./Components/SearchResults/index";
import SignUp from "./Components/SignUp/Index";
import Profile from "./Components/Profile/Profile";
import IndividualProductPage from "./Components/Products/IndividualProductPage";
import WishListPage from "./Components/WishList/WishListPage";
import NotFound from "./Components/404/NotFound";
import ComparePage from "./Components/ComparePage/index";
import TutorialPage from "./Components/TutorialPage/TutorialPage";

function App() {
	let currentProduct = useProductsStore((state) => state.currentProduct);
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<SearchPage />} />

					{!currentProduct ? (
						<Navigate to="/" />
					) : (
						<Route
							path="/searchresults/:id"
							element={<IndividualProductPage />}
						/>
					)}

					<Route path="searchresults" element={<SearchResults />}></Route>
					<Route path="signup" element={<SignUp />} />
					<Route path="login" element={<LogIn />} />
					<Route path="profile" element={<Profile />} />
					<Route path="compare" element={<ComparePage />} />
					<Route path="wishlist" element={<WishListPage />} />
					<Route path="tutorial" element={<TutorialPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
