import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let nameFromStorage = localStorage.getItem("userName");
let access_token = localStorage.getItem("access_token");

let userStore = (set) => ({
	isLoggedIn: access_token ? true : false,
	user_name: "",
	userName: nameFromStorage === "" ? "" : nameFromStorage,
	set_user_name: (user_name) =>
		set((state) => ({ user_name: user_name }), false, "Set_User_Name"),
	setIsLoggedIn: (isLoggedIn) =>
		set((state) => ({ isLoggedIn: isLoggedIn }), false, "Login"),
	setUserName: (newUserName) =>
		set((state) => ({ userName: newUserName }), false, "Set UserName"),
});

let productsStore = (set) => ({
	products: [],
	currentProduct: {},
	productsFiltered: [],
	productsFilteredSorted: [],
	setProducts: (products) =>
		set((state) => ({ products: products }), false, "SetProducts"),

	setCurrentProduct: (currentProduct) =>
		set(
			(state) => ({ currentProduct: currentProduct }),
			false,
			"SetCurrentProduct"
		),

	setProductsFiltered: (productsFiltered) =>
		set(
			(state) => ({ productsFiltered: productsFiltered }),
			false,
			"SetProductsFiltered"
		),
	setProductsFilteredSorted: (productsFilteredSorted) =>
		set(
			(state) => ({ productsFilteredSorted: productsFilteredSorted }),
			false,
			"SetproductsFilteredSorted"
		),
});

let sortStore = (set) => ({
	sortOrder: 4,
	priceRange: [],
	currentPriceRange: [],
	setSortOrder: (order) =>
		set((state) => ({ sortOrder: order }), false, "SetSortOrder"),
	setPriceRange: (priceRange) =>
		set((state) => ({ priceRange: priceRange }), false, "SetPriceRange"),
	setCurrentPriceRange: (currentPriceRange) =>
		set(
			(state) => ({ currentPriceRange: currentPriceRange }),
			false,
			"SetCurrentPriceRange"
		),
});

let searchStore = (set) => ({
	search: {},
	setSearch: (search) =>
		set((state) => ({ search: search }), false, "Set Search"),
});

userStore = devtools(userStore);
userStore = persist(userStore, { name: "user details" });
productsStore = devtools(productsStore);
productsStore = persist(productsStore, { name: "products" });
searchStore = devtools(searchStore);
searchStore = persist(searchStore, { name: "search" });
sortStore = devtools(sortStore);
sortStore = persist(sortStore, { name: "sort" });

export const useAuthStore = create(userStore);
export const useProductsStore = create(productsStore);
export const useSearchStore = create(searchStore);
export const useSortStore = create(sortStore);
