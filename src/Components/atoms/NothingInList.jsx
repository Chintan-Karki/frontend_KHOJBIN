import { useNavigate } from "react-router-dom";

export default function NothingInList() {
	let navigate = useNavigate();
	return (
		<div className="flex flex-col items-start h-[20vh]">
			<div className="">
				<h1 className="text-3xl font-bold py-8">No products to compare</h1>
				<p className="text-lg pb-4">Please add products to compare</p>
			</div>
			<button
				className="px-12 py-4 text-xl font-semibold text-blue-800 bg-blue-100 rounded-lg hover:scale-95 transition-all"
				onClick={() => navigate("/searchresults")}
			>
				{" "}
				Go to add products
			</button>
		</div>
	);
}
