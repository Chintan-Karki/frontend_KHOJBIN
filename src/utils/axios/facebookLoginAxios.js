import axios from "axios";
import axiosInstance from "./axios";
// import { useHistory } from 'react-router-dom';

const facebookLoginAxios = (accesstoken, set_user_name) => {
	console.log(accesstoken);
	axios
		.post("http://127.0.0.1:8000/auth/convert-token", {
			token: accesstoken,
			backend: "facebook",
			grant_type: "convert_token",
			client_id: "vlQJ3U0zTvlvdh42gLRs2DIl8VhIul5JGhWV46rK",
			client_secret:
				"96gKNpuK3rIkv3pMRGGo1zvsMcz1yHGQdWHvYwHJKJ5CUoDBL2q2nZ5F9gdcZOqzkxeGtfONpbogbfzNCNvriAvUacnvBKmuy3cFcY23ij8ugIW7PoKub1xKOe4a8GAf",
		})
		.then((res) => {
			localStorage.setItem("access_token", res.data.access_token);
			localStorage.setItem("refresh_token", res.data.refresh_token);
			axiosInstance.defaults.headers["Authorization"] =
				"Bearer " + localStorage.getItem("access_token");
			axiosInstance.get("user/").then((res) => {
				console.log(res.data);
				localStorage.setItem("userId", res.data.id);
				localStorage.setItem("userName", res.data.username);
			});
		});
};

export default facebookLoginAxios;
