import { useState } from "react";
import axiosInstance from "../config/axios-config";
import getCharacters from "./CharactersAPI";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  axiosInstance.interceptors.request.use(
    (value) => {
      setLoading(true);
      return value;
    },
    (error) => {
      setLoading(false);
      setError(error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (value) => {
      setLoading(false);
      return value;
    },
    (error) => {
      setLoading(false);
      setError(error);
      return Promise.reject(error);
    }
  );

  return { loading, error, getCharacters };
};

export default useHttp;
