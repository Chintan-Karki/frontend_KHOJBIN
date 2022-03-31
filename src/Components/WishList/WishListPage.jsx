import React from "react";
import WishedItems from "../WishList/WishedItems";

export default function WishListPage() {
	return (
		<>
			<section className=" py-1 ">
				<div className="w-full container px-4 mx-auto mt-6">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-100 border-0">
						<div className="rounded-t-xl bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between items-center">
								<h6 className="text-indigo-800  h-auto p-2  text-xl font-extrabold sm:ml-4">
									My WishList
								</h6>
								<img
									alt="test"
									src="https://avatars.dicebear.com/api/bottts/test.svg"
									className="rounded-full w-12 h-auto sm:mr-10"
								/>
							</div>
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<WishedItems />
							<hr className="mt-6 border-b-1 border-blueGray-300" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
