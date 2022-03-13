import create from "zustand";
import { devtools } from "zustand/middleware";

let nameFromStorage = localStorage.getItem("userName");
let access_token = localStorage.getItem("access_token");

let userStore = (set) => ({
	isLoggedIn: access_token ? true : false,
	userName: nameFromStorage === "" ? "" : nameFromStorage,
	setIsLoggedIn: (isLoggedIn) =>
		set((state) => ({ isLoggedIn: isLoggedIn }), false, "Login"),
	setUserName: (newUserName) =>
		set((state) => ({ userName: newUserName }), false, "Set UserName"),
});

let productsStore = (set) => ({
	products: [],
	productsFiltered: [],
	setProducts: (products) =>
		set((state) => ({ products: products }), false, "SetProducts"),
	setProductsFiltered: (productsFiltered) =>
		set(
			(state) => ({ productsFiltered: productsFiltered }),
			false,
			"SetProductsFiltered"
		),
});

let searchStore = (set) => ({
	search: {},
	searchTime: "",
	setSearch: (search) =>
		set((state) => ({ search: search }), false, "Set Search"),
	setSearchTime: (searchTime) =>
		set((state) => ({ searchTime: searchTime }), false, "setSearchTime"),
});

userStore = devtools(userStore);
productsStore = devtools(productsStore);
searchStore = devtools(searchStore);

export const useAuthStore = create(userStore);
export const useProductsStore = create(productsStore);
export const useSearchStore = create(searchStore);
