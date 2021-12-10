import { Link } from "react-router-dom";
import sideImage from "../../assets/Saly-25.svg";
import logo from "../../assets/logoPrimary.svg";
import smile from "../../assets/smile.png";
import smile2 from "../../assets/smile2.png";
import { useForm } from "react-hook-form";

import ErrorMessage from "../atoms/ErrorMessage";
import { useRef } from "react";

export default function SignUp() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const password = useRef({});
	password.current = watch("password", "");

	const onSubmit = (data) => {
		console.log(data);
		alert(JSON.stringify(data));
	};

	return (
		<div className=" flex items-center min-h-screen bg-indigo-50">
			<div className="relative flex-1 h-full max-w-4xl mx-auto rounded-xl shadow-xl transition bg-white">
				<img
					src={smile}
					className="absolute h-0 w-0 md:visible lg:h-32 lg:w-auto lg:-top-14 lg:left-60 "
					alt=""
				/>
				<img
					src={smile2}
					className="absolute h-0 w-0 md:visible lg:h-48 lg:w-auto lg:top-3/4 lg:-left-24"
					alt=""
				/>
				<div className="flex flex-col md:flex-row ">
					<div className="h-32 md:h-auto bg-green-200 md:w-2/5 rounded-xl flex justify-center items-center">
						<img
							className="md:w-5/6 max-h-40 md:max-h-72"
							src={sideImage}
							alt="img"
						/>
					</div>
					<div className="flex items-center justify-center p-6 sm:p-12 md:w-3/5 bg-white rounded-xl">
						<div className="w-full">
							<Link to="/" className="flex justify-start">
								<img src={logo} alt="logo" className="h-10 mb-10" />
							</Link>
							<h1 className="mb-4 text-2xl font-bold text-left text-indigo-900 ">
								Sign up
							</h1>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div>
									<label className="block text-sm" htmlFor="name">
										Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Name"
										{...register("name", {
											required: "Name is required",
											minLength: {
												value: 3,
												message: "Minimum 3 Characters required.",
											},
										})}
									/>
									{errors.name && (
										<ErrorMessage message={errors.name.message} />
									)}
								</div>
								<div className="mt-4">
									<label className="block text-sm" htmlFor="email">
										Email
									</label>
									<input
										type="email"
										{...register("email", {
											required: "Email is required",
											maxLength: {
												value: 30,
												message: "You cannot exceed the length",
											},
										})}
										className="w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Email Address"
									/>
									{errors.email && (
										<ErrorMessage message={errors.email.message} />
									)}
								</div>
								<div className="mt-4">
									<label className="block text-sm mb-1">Password</label>
									<input
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 8,
												message: "Minimum 8 Characters required.",
											},
										})}
										type="password"
										className=" relative w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Password"
									/>
									{errors.password && (
										<ErrorMessage message={errors.password.message} />
									)}
								</div>
								<div className="mt-4">
									<label className="block text-sm mb-1">Confirm Password</label>
									<input
										{...register("confirmpassword", {
											required: "Password is required",
											minLength: {
												value: 8,
												message: "Minimum 8 Characters required.",
											},
											validate: (value) =>
												value === password.current ||
												"The passwords do not match",
										})}
										type="password"
										className="w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Confirm Password"
									/>
									{errors.confirmpassword && (
										<ErrorMessage message={errors.confirmpassword.message} />
									)}
								</div>
								<button className="block w-full px-4 py-2 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
									Sign up
								</button>
							</form>

							<div className="mt-4 text-left">
								<p className="text-sm">
									Already have an account?{" "}
									<Link to="/login" className="text-indigo-600 hover:underline">
										{" "}
										Log in.
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
