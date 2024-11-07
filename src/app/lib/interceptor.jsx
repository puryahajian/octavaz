import axios from "axios";

const interceptor = axios.create({
  baseURL: "https://octavaz.com/",
  headers: {
    'Accept': 'application/json', 
  },
});

interceptor.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
  },
);

export default interceptor;
