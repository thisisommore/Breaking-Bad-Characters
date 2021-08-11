import { useEffect, useState } from "react";
import axiosInstance from "../config/axios-config";
import { getCharacters, getCharacter } from "./CharactersAPI";
import getQuote from "./QuotesAPI";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    let requestInterceptor = axiosInstance.interceptors.request.use(
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

    let responseInterceptor = axiosInstance.interceptors.response.use(
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
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return { loading, error, getCharacters, getCharacter, getQuote };
};

export default useHttp;
