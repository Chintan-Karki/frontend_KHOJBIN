import React, { useEffect, useState } from "react";
import { useSortStore } from "../../utils/store";

export default function PriceRange() {
	return (
		<>
			<hr />
			<div className="my-2">Price Range</div>
			<PriceRangeForm />
		</>
	);
}

const PriceRangeForm = () => {
	let priceRange = useSortStore((state) => state.priceRange);
	const [minValue, setMinValue] = useState(priceRange[0]);
	const [maxValue, setMaxValue] = useState(priceRange[1]);

	useEffect(() => {
		setMinValue(priceRange[0]);
		setMaxValue(priceRange[1]);
	}, [priceRange]);

	const handleSubmit = async (e, newValue) => {
		e.preventDefault();
		// console.log(priceRange);

		let [min, max] = [
			Number(isNaN(minValue) ? 0 : minValue),
			Number(isNaN(maxValue) ? 0 : maxValue),
		];
		console.log([min, max]);
	};

	return (
		<>
			<form
				className="flex flex-row justify-between text-slate-500 text-xs gap-2"
				style={{ width: "100%" }}
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e, [
						minValue === "" || typeof minValue === "undefined" ? 0 : minValue,
						maxValue === "" ? 0 : maxValue,
					]);
				}}
			>
				<div className="flex flex-col items-start w-4/12 ">
					<label className="text-gray-400 text-xs"> Min</label>
					<input
						type="number"
						className="border-2 rounded pl-1 py-2 w-full"
						min={priceRange[0]}
						max={priceRange[1]}
						value={minValue ? minValue : priceRange[0]}
						onChange={(event) => {
							if (
								(event.target.value < priceRange[0]) |
								(event.target.value > priceRange[1])
							) {
								setMinValue(priceRange[0]);
								return;
							}
							setMinValue(event.target.value);
						}}
					/>
				</div>
				<div className="flex flex-col items-start w-4/12 ">
					<label className="text-gray-400 text-xs"> Max</label>

					<input
						type="number"
						className="border-2 rounded pl-1 py-2 w-full"
						min={priceRange[0]}
						max={priceRange[1]}
						value={maxValue ? maxValue : priceRange[1]}
						onChange={(event) => {
							if (
								(event.target.value < minValue) |
								(event.target.value === "") |
								(event.target.value === "0")
							)
								return;
							if (event.target.value > priceRange[1]) {
								setMaxValue(priceRange[1]);
								return;
							}
							setMaxValue(event.target.value);
						}}
					/>
				</div>
				<button
					className="w-3/12 rounded  mt-4 text-xs bg-orange-400 hover:shadow-lg hover:shadow-orange-600/50"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						handleSubmit(e, [minValue, maxValue]);
					}}
				>
					🔍
				</button>
			</form>
		</>
	);
};