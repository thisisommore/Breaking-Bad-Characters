import axios from "axios";

export default function createAxiosInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URl,
  });
}
