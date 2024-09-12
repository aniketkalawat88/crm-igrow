import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

export default axiosInstance;
