import React from "react";
import NavBar from "./Components/atoms/NavBar";
import SearchPage from "./Components/SearchPage/SearchPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./Components/LogIn/index";
import SearchResults from "./Components/SearchResults/index";
import SignUp from "./Components/SignUp/Index";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Profile/Profile";
import IndividualProductPage from "./Components/Products/IndividualProductPage";
import { useProductsStore } from "./utils/store";
import WishListPage from "./Components/WishList/WishListPage";

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

					<Route path="searchresults" element={<SearchResults />}>
						<Route
							index
							element={
								<main style={{ padding: "1rem" }}>
									<p>Select an invoice</p>
								</main>
							}
						/>
					</Route>
					<Route path="signup" element={<SignUp />} />
					<Route path="login" element={<LogIn />} />
					<Route path="profile" element={<Profile />} />
					<Route path="wishlist" element={<WishListPage />} />
					<Route
						path="*"
						element={
							<main className="p-4">
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
