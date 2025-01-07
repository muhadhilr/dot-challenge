import axios from "axios";

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL,
  timeout: 5000,
});

export default authInstance;
