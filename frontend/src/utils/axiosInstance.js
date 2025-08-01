import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({

  withCredentials: true,
});


axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default axiosInstance;
