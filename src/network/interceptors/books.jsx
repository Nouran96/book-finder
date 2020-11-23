import axiosInstance from "axios";

axiosInstance.interceptors.request.use(
  (config) => console.log(config),
  (error) => console.log(error)
);
