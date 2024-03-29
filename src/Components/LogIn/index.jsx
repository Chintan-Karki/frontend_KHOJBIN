import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios/login";
import axiosInstanceOther from "../../utils/axios/axios";
import { useForm } from "react-hook-form";

// Local Variables
import sideImage from "../../assets/images/Saly-26.png";
import logo from "../../assets/images/logoPrimary.svg";
import smile from "../../assets/images/smile.png";
import smile2 from "../../assets/images/smile2.png";
import ErrorMessage from "../atoms/ErrorMessage";
import EyeClosed from "../../assets/icons/EyeClosed";
import Eye from "../../assets/icons/Eye";
import { useAuthStore } from "../../utils/store";
import WarningMessage from "../atoms/WarningMessage";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import facebookLoginAxios from "../../utils/axios/facebookLoginAxios";

export default function LogIn() {
	let navigate = useNavigate();
	let set_user_name = useAuthStore((state) => state.set_user_name);
	let user_name = useAuthStore((state) => state.user_name);
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [showPassword, setShowPassword] = useState(false);

	console.log(errors);

	const handleAuthentication = async (data) => {
		console.log(data);
		await localStorage.setItem("access_token", data.access_token);
		await localStorage.setItem("refresh_token", data.refresh_token);
		axiosInstance.defaults.headers["Authorization"] =
			"Bearer " + localStorage.getItem("access_token");

		setIsLoggedIn(true);
		window.history.go(-1);
	};

	const onSubmit = (data) => {
		axiosInstance
			.post(`auth/token/`, {
				username: data.email,
				password: data.password,
				grant_type: "password",
				client_secret:
					"96gKNpuK3rIkv3pMRGGo1zvsMcz1yHGQdWHvYwHJKJ5CUoDBL2q2nZ5F9gdcZOqzkxeGtfONpbogbfzNCNvriAvUacnvBKmuy3cFcY23ij8ugIW7PoKub1xKOe4a8GAf",
				client_id: "vlQJ3U0zTvlvdh42gLRs2DIl8VhIul5JGhWV46rK",
			})
			.then((res) => {
				axiosInstance.defaults.headers["Authorization"] =
					"Bearer " + res.data.access_token;
				axiosInstanceOther.defaults.headers["Authorization"] =
					"Bearer " + res.data.access_token;
				axiosInstanceOther.get("user/").then((res) => {
					console.log(res.data);
					localStorage.setItem("userId", res.data.id);
					localStorage.setItem("userName", res.data.username);
					set_user_name(res.data.username);
				});

				handleAuthentication(res.data);
			})
			.catch((err) => {
				console.log(err);
				err.response.data.error_description === "Invalid credentials given."
					? alert("Invalid credentials provided.")
					: console.log(err.response.data.error_description);
			});
	};

	let responseFacebook = (response) => {
		console.log(response);
		facebookLoginAxios(response.accessToken, set_user_name);
		// localStorage.setItem("userId", response.id);
		// localStorage.setItem("userName", response.name);
		setIsLoggedIn(true);
		console.log(user_name);
		navigate("/");
		// window.history.go(-1);
	};

	return (
		<>
			<div className="flex items-center min-h-[85vh] ">
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
						<div className=" h-32 md:h-auto bg-green-200 md:w-2/5 rounded-xl flex justify-center items-center">
							<img
								className=" visible md:h-52 max-h-52"
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
									Log In
								</h1>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="mt-4">
										<label className="block text-sm mb-1" htmlFor="email">
											Email
										</label>
										<input
											{...register("email", {
												required: "Email is required",
												maxLength: {
													value: 30,
													message: "You cannot exceed the length",
												},
											})}
											type="email"
											className="peer w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600  disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600"
											placeholder="Email Address"
											autoComplete="email"
										/>
										{errors.email && (
											<ErrorMessage message={errors.email.message} />
										)}
									</div>

									{/* Password   */}
									<div className="mt-4 relative">
										<label className="block text-sm mb-1">Password</label>
										<input
											{...register(
												"password"
												// Setting up the rules for password **in production
												// {
												// 	required: "Password is required",
												// 	minLength: {
												// 		value: 8,
												// 		message: "Minimum 8 Characters required.",
												// 	},
												// }
											)}
											type={showPassword ? "text" : "password"}
											className="w-full px-4 py-2 text-sm border rounded-md bg-white focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
											placeholder="Password"
										/>
										{errors.password &&
											(errors.password.type === "minLength" ? (
												<WarningMessage message={errors.password.message} />
											) : (
												<ErrorMessage message={errors.password.message} />
											))}
										<i
											className="absolute top-[30px] left-[91%]"
											onClick={(e) => {
												setShowPassword(!showPassword);
											}}
										>
											{showPassword ? <EyeClosed /> : <Eye />}
										</i>
									</div>
									<button
										type="submit"
										className="block w-full px-4 py-2 mb-4 mt-8 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
										onClick={onSubmit}
									>
										Log In
									</button>
									{/* <FacebookLogin
										appId="5100792743311105"
										autoLoad={false}
										fields="name,email,picture"
										callback={responseFacebook}
									/> */}
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
												Facebook
											</button>
										</div>
									)}
								/>

								<div className="mt-4 text-left">
									<p className="text-sm">
										Don't have an account,yet ?{" "}
										<Link
											to="/signup"
											className="text-indigo-600 hover:underline"
										>
											{" "}
											Sign up.
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
