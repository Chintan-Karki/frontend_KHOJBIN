import React from "react";
import homePage from "..//..//assets//images//homeui.png";
import results from "..//..//assets//images//searchresults.png";
import smile from "..//..//assets//images//smile.png";
import Description from "./Description";

export default function TutorialPage() {
	return (
		<>
			<div className="h-full">
				{/*Main*/}
				<div className="container pt-24 md:pt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
					{/*Left Col*/}
					<section className="text-center px-8 container mb-28">
						<span className="text-indigo-900 text-4xl tracking-tight font-extrabold sm:text-5xl ">
							Welcome to
						</span>
						<h2 className=" bg-clip-text text-transparent bg-gradient-to-br from-[#423d8e] to-[#659898] text-3xl my-2 p-8 sm:text-9xl tracking-tight font-extrabold ">
							Khojbin
						</h2>
						<figure>
							<blockquote>
								<p className="mt-6 max-w-3xl mx-auto text-2xl font-bold text-yellow-600">
									Khojbin is a one stop solution for all your ecommerce needs in
									Nepal. Whether you are looking for a mini hot-wheel, or a
									brand new car, this site has you covered.
									<br />
									<br />
									<span className="text-indigo-800">
										You can search for products, compare prices, and even buy
										them yourself.
									</span>
								</p>
							</blockquote>
							<figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
								<img
									src={smile}
									alt=""
									className="w-14 h-14 rounded-full"
									loading="lazy"
								/>
								<div>
									<div className="text-slate-900 font-semibold ">
										Chintan Karki
									</div>
									<div className="mt-0.5 text-sm leading-6">
										Creator of Khojbin
									</div>
								</div>
							</figcaption>
						</figure>
					</section>
					{/*Right Col*/}
					<div className="w-full container p-12 overflow-hidden">
						<img
							className="mx-auto w-full md:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
							src={homePage}
							alt="homePage"
						/>
					</div>

					<section className="text-center px-8 container my-28">
						<h2 className="text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl ">
							Just search for what you're looking for 👍
						</h2>
						<figure>
							<blockquote>
								<p className="mt-6 max-w-3xl mx-auto text-lg">
									Type what you are looking for in the search bar.
									<br />
									Get the best deals on the products you are looking for.
									<br />
									<br />
									No matter the product you are looking for, Khojbin has it all.
									Actually, Khojbin is just a intuitive search engine for
									everything you're looking for in Nepali ecommerce ecosystem.
									<br />
									<br />
									<span className="text-indigo-800">
										You can search for products, compare prices, and even buy
										them yourself.
									</span>
								</p>
							</blockquote>
							<figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
								<img
									src={smile}
									alt=""
									className="w-14 h-14 rounded-full"
									loading="lazy"
								/>
							</figcaption>
						</figure>
					</section>
					<div className="w-full container p-12 overflow-hidden">
						<img
							className="mx-auto w-full md:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
							src={results}
							alt="homePage"
						/>
					</div>

					<Description />

					{/*Footer*/}
					<div className="w-full container pt-16 pb-6 text-sm text-center md:text-left fade-in">
						<span className="text-gray-500 no-underline hover:no-underline mr-2">
							© Khojbin 2022
						</span>
						- An Application by &nbsp;
						<a
							className="text-gray-500 no-underline hover:no-underline"
							href="https://www.chintankarki.com.np"
							alt="Chintan Karki"
						>
							chintankarki.com.np
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
