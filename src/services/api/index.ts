import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_URL_API,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;