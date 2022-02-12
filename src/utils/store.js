import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
	isLoggedIn: false,
	userName: "",
	setIsLoggedIn: (isLoggedIn) => set((state) => ({ isLoggedIn: isLoggedIn })),
	setUserName: (newUserName) => set((state) => ({ userName: newUserName })),
});

const useStore = create(devtools(store));

export default useStore;
