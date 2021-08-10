import axiosInstance from "../config/axios-config";
import Characters from "../types/Characters";

export default function getCharacters(pageNo = 0) {
  return axiosInstance.get<Characters>(`/characters`, {
    params: {
      limit: 10,
      offset: pageNo * 10,
    },
  });
}
