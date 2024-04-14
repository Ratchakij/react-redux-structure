import axios from "axios";
// import { persistor } from "../store/store";

console.log("BACKEND_URL: " + import.meta.env.VITE_API_URL);
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

let token;

axios.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      console.log(config.headers.Authorization);
    }
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 401) {
    //   removeAccessToken();
    //   window.location.href = "/login";
    // }
    return Promise.reject(error);
  }
);

export const setHeadersToken = (newToken) => {
  token = newToken;
};

export default axios;
