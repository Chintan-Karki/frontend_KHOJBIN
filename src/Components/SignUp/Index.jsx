import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import sideImage from "../../assets/images/Saly-25.png";
import logo from "../../assets/images/logoPrimary.svg";
import smile from "../../assets/images/smile.png";
import smile2 from "../../assets/images/smile2.png";
import { useForm } from "react-hook-form";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import ErrorMessage from "../atoms/ErrorMessage";
import { useRef, useState } from "react";
import Eye from "../../assets/icons/Eye";
import EyeClosed from "../../assets/icons/EyeClosed";
import axiosInstance from "../../utils/axios/axios";
import facebookLoginAxios from "../../utils/axios/facebookLoginAxios";
import { useAuthStore } from "../../utils/store";

export default function SignUp() {
	let navigate = useNavigate();
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	let [isLoading, setIsLoading] = useState(false);

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);

	const password = useRef({});
	password.current = watch("password", "");

	let responseFacebook = (response) => {
		setIsLoading(true);
		console.log(response);
		facebookLoginAxios(response.accessToken);
		// localStorage.setItem("userId", response.id);
		// localStorage.setItem("userName", response.name);
		setIsLoggedIn(true);
		setIsLoading(false);
		navigate("/");
		// window.history.go(-1);
	};

	const onSubmit = (data) => {
		console.log(data);
		axiosInstance
			.post(`user/register/`, {
				email: data.email,
				username: data.name,
				password: data.password,
			})
			.then((res) => {
				console.log(res);
				console.log(res.data);
				navigate("/login");
				console.log(res["non_field_errors"]);
			})
			.catch((err) => {
				alert(err.response.data.non_field_errors[0]);
			});
	};

	return (
		<div className=" flex items-center min-h-[85vh] ">
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
							<form onSubmit={handleSubmit(onSubmit)} className="relative">
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
								<div className="mt-4 relative">
									<label className="relative block text-sm mb-1">
										Password
									</label>
									<input
										{...register("password", {
											required: "Password is required",
											minLength: {
												value: 8,
												message: "Minimum 8 Characters required.",
											},
										})}
										type={showPassword ? "text" : "password"}
										className=" w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Password"
									/>
									{errors.password && (
										<ErrorMessage message={errors.password.message} />
									)}
									<i
										className="absolute top-[30px] left-[91%]"
										onClick={(e) => {
											setShowPassword(!showPassword);
										}}
									>
										{showPassword ? <EyeClosed /> : <Eye />}
									</i>
								</div>

								<div className="mt-4 relative">
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
										type={showPassword ? "text" : "password"}
										className="relative w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Confirm Password"
									></input>
									{errors.confirmpassword && (
										<ErrorMessage message={errors.confirmpassword.message} />
									)}
									<i
										className="absolute top-[30px] left-[91%]"
										onClick={(e) => {
											setShowPassword(!showPassword);
										}}
									>
										{showPassword ? <EyeClosed /> : <Eye />}
									</i>
								</div>

								<button className="block w-full px-4 py-2 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
									Sign up
								</button>
							</form>
							<FacebookLogin
								appId="5100792743311105"
								autoLoad={false}
								callback={responseFacebook}
								fields="name,email,picture"
								render={(renderProps) => (
									<div className="mt-4">
										Or, you can also login through &nbsp;
										<button
											onClick={renderProps.onClick}
											className="transition-all w-full text-indigo-900 mt-1 hover:text-indigo-50 hover:bg-indigo-800 hover:border-indigo-800 p-2 border-2 rounded px-4"
										>
											{isLoading ? "wait.." : "Facebook"}
										</button>
									</div>
								)}
							/>
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
