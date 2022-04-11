import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import { defaultRank } from "../../Services/RankFind";
import { useProductsStore } from "../../utils/store";

export default function SellerRankSetter() {
	let sellerOrder = useProductsStore((state) => state.sellerOrder);
	let setSellerOrder = useProductsStore((state) => state.setSellerOrder);

	const [state, setState] = useState(
		sellerOrder.length !== 0 ? sellerOrder : defaultRank
	);

	const sellerImages = {
		Daraz:
			"https://icms-image.slatic.net/images/ims-web/458d4688-ae26-4e6d-8f39-c26194de228a.png",
		Hamrobazaar: "https://hamrobazaar.com/icon-192x192.png",
		Ryzen: "https://ecommerce.thexpresstimes.com/uploads/logo.png",
		Sastodeal:
			"https://www.sastodeal.com/media/logo/stores/1/SDLogo_White-Logo.png",
		Gyapu: "https://www.gyapu.com/806b0f041fef60968c877fe5b54014cb.svg",
	};

	useEffect(() => {
		// console.log("state", state);
		setSellerOrder(state);
		// setState(state);
		// window.location.reload();
		console.log(sellerOrder);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sellerOrder, state]);

	return (
		<>
			<hr className="mt-6 border-b-1 border-blueGray-300" />
			<div className="px-4 my-6">
				<h6 className="text-indigo-500 text-lg mt-3  font-bold uppercase">
					Set Priority
				</h6>
				<label className="my-6 text-xs text-gray-500">
					Drag up and down to set your personal priority for the sellers
				</label>
			</div>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-12/12 px-4">
					<div className="relative w-full mb-3">
						<ReactSortable list={state} setList={setState}>
							{state.map((item) => (
								<div
									key={item.id}
									className="flex flex-row-reverse cursor-move justify-between border-0 px-3 py-3 text-gray-600 mb-2 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
								>
									<div className="">{item.name}</div>
									<img
										src={sellerImages[item.name]}
										alt={item.sellerName}
										className="object-scale-down h-5"
									/>
								</div>
							))}
						</ReactSortable>
					</div>
				</div>
			</div>
		</>
	);
}
