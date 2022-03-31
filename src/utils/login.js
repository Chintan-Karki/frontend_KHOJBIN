import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";
const axiosInstance = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default axiosInstance;
