import create from "zustand";
import { devtools } from "zustand/middleware";
import axiosInstance from "./axios";

localStorage.getItem("access_token");
localStorage.getItem("refresh_token");
let nameFromStorage = localStorage.getItem("userName");
let authParam = (axiosInstance.defaults.headers["Authorization"] =
	"JWT " + localStorage.getItem("access_token"));

const store = (set) => ({
	isLoggedIn: authParam !== null ? true : false,
	userName: nameFromStorage === "" ? "" : nameFromStorage,
	setIsLoggedIn: (isLoggedIn) => set((state) => ({ isLoggedIn: isLoggedIn })),
	setUserName: (newUserName) => set((state) => ({ userName: newUserName })),
});

const useStore = create(devtools(store));

export default useStore;
