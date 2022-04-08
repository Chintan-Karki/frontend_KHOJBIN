import React from "react";
import GridView from "../../assets/icons/GridView";
import ListView from "../../assets/icons/ListView";

export default function ViewChange({gridView, setGridView}) {
	return (
		<>
			<button
				className={`${
					gridView
						? "mr-2 p-2 bg-white rounded border border-indigo-100"
						: "mr-2 p-2"
				}`}
				onClick={() => {
					setGridView(true);
				}}
			>
				<GridView />
			</button>
			<button
				className={`${
					!gridView
						? "mr-2 p-2 bg-white rounded border border-indigo-100"
						: "mr-2 p-2"
				}`}
				onClick={() => {
					setGridView(false);
				}}
			>
				<ListView />
			</button>
		</>
	);
}
