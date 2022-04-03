import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import _ from "lodash";
import Cash from "../../assets/icons/Cash";
import UpArrow from "../../assets/icons/UpArrow";
import DownArrow from "../../assets/icons/DownArrow";
import Star from "../../assets/icons/Star";
import { useProductsStore, useSortStore } from "../../utils/store";
import ChevronDown from "../../assets/icons/ChevronDown";
// import { ChevronDownIcon } from "@heroicons/react/solid";

export default function SortMenu() {
	let sortOption = useSortStore((state) => state.sortOrder);
	let setSortOption = useSortStore((state) => state.setSortOrder);
	let productsFiltered = useProductsStore((state) => state.productsFiltered);
	let setProductsFiltered = useProductsStore(
		(state) => state.setProductsFiltered
	);
	// let [sortOption, setSortOption] = useState();

	useEffect(() => {
		if (sortOption === 0) {
			setProductsFiltered(
				_.sortBy(productsFiltered, function (obj) {
					return parseInt(obj.price, 10);
				})
			);
		}
		if (sortOption === 1) {
			setProductsFiltered(
				_.reverse(
					_.sortBy(productsFiltered, function (obj) {
						return parseInt(obj.price, 10);
					})
				)
			);
		}
		if (sortOption === 2) {
			setProductsFiltered(
				_.orderBy(productsFiltered, ["ratingScore"], ["asc"])
			);
		}
		if (sortOption === 3) {
			setProductsFiltered(
				_.orderBy(productsFiltered, ["ratingScore"], ["desc"])
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortOption]);

	return (
		<div className="text-right z-10">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-indigo-600  rounded-md bg-opacity-100 shadow-sm focus:shadow-none hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 bg-white focus-visible:ring-white focus-visible:ring-opacity-75">
						Sort Options
						<ChevronDown />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											sortOption === 0
												? "bg-violet-500 text-white"
												: "text-gray-900"
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										onClick={() => {
											setSortOption(0);

											// setProductsFiltered(sortedProducts);
										}}
									>
										<Cash color={sortOption === 0 ? "#ffffff" : "#4db13d"} />
										<DownArrow />
										Price low to high
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											sortOption === 1
												? "bg-violet-500 text-white"
												: "text-gray-900"
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										onClick={() => {
											setSortOption(1);

											// setProductsFiltered(sortedProducts);
										}}
									>
										<Cash color={sortOption === 1 ? "#ffffff" : "#4db13d"} />
										<UpArrow /> Price high to low
									</button>
								)}
							</Menu.Item>
						</div>
						<div className="px-1 py-1">
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											sortOption === 2
												? "bg-violet-500/70 text-white"
												: "text-gray-900"
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										onClick={() => {
											setSortOption(2);
										}}
									>
										<Star color={sortOption === 2 ? "#fff" : "#f96e29"} />
										<DownArrow />
										Ratings low to high
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										className={`${
											sortOption === 3
												? "bg-violet-500 text-white"
												: "text-gray-900"
										} group flex rounded-md items-center w-full px-2 py-2 text-sm`}
										onClick={() => {
											setSortOption(3);
										}}
									>
										<Star color={sortOption === 3 ? "#fff" : "#f96e29"} />
										<UpArrow />
										Ratings high to low
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
