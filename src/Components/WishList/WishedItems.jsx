import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import WishedItem from "./WishedItem";
import loaderGif from "../../assets/images/loaderGif2.gif";

export default function WishedItems() {
	let [wishList, setWishList] = useState([]);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosInstance.get("/wishlist").then((res) => {
			setWishList(res.data);
			console.log(res.data);
			// sleep for a second
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		});
	}, []);

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
