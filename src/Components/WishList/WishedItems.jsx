import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios/axios";
import WishedItem from "./WishedItem";
import loaderGif from "../../assets/images/loaderGif2.gif";
import { useAuthStore } from "../../utils/store";
import { useNavigate } from "react-router-dom";
import SessionExpired from "../Modals/SessionExpired";

export default function WishedItems() {
	let [wishList, setWishList] = useState([]);
	let [loading, setLoading] = useState(true);
	let navigate = useNavigate();
	let setUserName = useAuthStore((state) => state.setUserName);
	let set_user_name = useAuthStore((state) => state.set_user_name);
	let setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	let [isErrorOpen, setIsErrorOpen] = useState(false);


	useEffect(() => {
		axiosInstance
			.get("/wishlist")
			.then((res) => {
				setWishList(res.data);
				console.log(res.data);
				// sleep for a second
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				localStorage.removeItem("access_token");
				localStorage.removeItem("refresh_token");
				localStorage.removeItem("userName");
				localStorage.removeItem("userId");
				axiosInstance.defaults.headers["Authorization"] = null;
				setUserName("");
				set_user_name("");
				setIsLoggedIn(false);
				setIsErrorOpen(true);
			});
	}, [navigate, setIsLoggedIn, setUserName, set_user_name]);

	const handleDeleteFromWishlist = async (e, item) => {
		e.preventDefault();
		console.log(item.id);

		await axiosInstance.delete(`wishlist/${item.id}`).then((res) => {
			console.log(res.data);
		});
		await setLoading(true);
		setWishList(wishList.filter((wish) => wish.id !== item.id));
		setLoading(false);
	};

	return (
		
		<div className="transition">
			<SessionExpired isOpen={isErrorOpen} setIsOpen={setIsErrorOpen} />

			{loading ? (
				<div className="flex h-20 items-center justify-center">
					<img src={loaderGif} alt="loading..." className="h-48" />
				</div>
			) : (
				<section>
					<hr className="mt-6 border-b-1 border-blueGray-300" />
					<h6 className="text-indigo-700 text-sm mt-3 mb-6 font-bold uppercase">
						My WishList
					</h6>
					<motion.div
						layout
						className="flex flex-row transition-all flex-wrap justify-center gap-4 w-full items-start"
					>
						<AnimatePresence>
							{wishList.map((item) => (
								<WishedItem
									key={item.id}
									item={item}
									onDelete={handleDeleteFromWishlist}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				</section>
			)}
		</div>
	);
}
