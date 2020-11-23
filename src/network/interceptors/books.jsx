import axiosInstance from "axios";

axiosInstance.interceptors.requests.use(
  (config) => console.log(config),
  (error) => console.log(error)
);
