import axios from 'axios';

export const axiosBase = axios.create({
	baseURL: import.meta.env.VITE_BAC_URL
});

axiosBase.interceptors.request.use(config => {
	const tokenAuth = localStorage.getItem('token');
	if (config && config.headers && tokenAuth) {
		config.headers.Authorization = `Bearer ${tokenAuth}`;
	}
	return config;
});

/*axiosBase.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		console.log('ошибка');
		/*		if (error.response.status === 401 && error.config && !error.config._isRetry) {
			queryClient.clear();
			console.log('yes');
			originalRequest._isRetry = true;
			return axiosBase.request(originalRequest);
		} return Promise.reject(error)}) */
