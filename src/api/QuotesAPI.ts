import axiosInstance from "../config/axios-config";
import { Quote } from "../types/Quote";

export default function getQuote(authorName: string) {
  return axiosInstance.get<Quote[]>(`/quote`, {
    params: {
      author: authorName,
    },
  });
}
