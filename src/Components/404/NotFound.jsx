import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className="container w-auto mx-auto px-4">
			<div
				className="
                    flex
                    items-center
                    justify-center
                    h-[80vh]
                "
			>
				<div className="px-40 py-20 bg-white rounded-md shadow-xl w-8/12">
					<div className="flex flex-col items-center">
						<h1 className="font-bold text-blue-600 text-9xl mb-4">404</h1>
						<h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
							<span className="text-red-500">Oops!</span> Page not found
						</h6>
						<p className="mb-8 text-center text-gray-500 md:text-lg">
							The page you’re looking for doesn’t exist.
						</p>
						<button
							href="#"
							className="px-12 py-4 text-xl font-semibold text-blue-800 bg-blue-100 rounded-lg hover:scale-95 transition-all"
							onClick={() => navigate("/")}
						>
							Go home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
