import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,  // Ensures cookies (like the refresh token) are sent with requests
    headers: {
        'Content-Type': 'application/json',
    }
});

const refreshTokenInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,  // Ensures cookies (like the refresh token) are sent with requests
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        if (error.response && error.response.status === 401) {
            try {
                const response = await refreshTokenInstance.get('http://localhost:3000/auth/refresh-token');
                if (response.status === 401) {
                    return Promise.reject(error);
                }
                return axiosInstance(error.config)
            } catch (error) {
                return Promise.reject(error);
            }
        }
        console.log(9)
        return Promise.reject(error);
    }
);