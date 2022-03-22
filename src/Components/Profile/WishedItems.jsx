import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import WishedItem from "./WishedItem";

export default function WishedItems() {
	let [wishList, setWishList] = useState([]);
	let [loading, setLoading] = useState(true);

	useEffect(() => {
		axiosInstance.get("/wishlist").then((res) => {
			setWishList(res.data);
			console.log(res.data);
			setLoading(false);
		});
	}, []);
	return (
		<div className="flex z-10">
			{loading ? (
				<div>Loading...</div>
			) : (
				<section>
					<motion.div
						layout
						className="w-full flex flex-row flex-wrap justify-center items-baseline"
					>
						{wishList.map((item) => (
							<WishedItem key={item.name + item.sellerName} item={item} />
						))}
					</motion.div>
				</section>
			)}
		</div>
	);
}
