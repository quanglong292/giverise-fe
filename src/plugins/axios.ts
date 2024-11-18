import axios from "axios";

const dev = "http://localhost:4000/api";
const prod = "http://your_prod_url/api";
const baseURL = import.meta.env.MODE === "production" ? prod : dev;

const axiosInstance = axios.create({ baseURL, timeout: 30000 });

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
