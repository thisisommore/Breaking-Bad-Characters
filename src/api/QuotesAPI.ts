import axiosInstance from "../config/axios-config";

export type GetQuotesReponse = string[]
export default function getQuote(authorName: string) {
  return axiosInstance.get<GetQuotesReponse>(`/quotes`, {
    params: {
      author: authorName,
    },
  });
}
