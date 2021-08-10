import axiosInstance from "../config/axios-config";
import { Quote } from "../types/Quote";

export default function getQuotes(charId: string) {
  return axiosInstance.get<Quote[]>(`/quotes/${charId}`);
}
