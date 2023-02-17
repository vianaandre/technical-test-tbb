import axios from 'axios';

const api = axios.create({
	baseURL: process.env.VITE_URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;