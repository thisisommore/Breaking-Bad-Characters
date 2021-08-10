import axiosInstance from "../config/axios-config";
import Charactors from "../types/Charactors";

export default function getCharactors(pageNo = 0) {
  return axiosInstance.get<Charactors>(`/characters`, {
    params: {
      limit: 10,
      offset: pageNo * 10,
    },
  });
}
