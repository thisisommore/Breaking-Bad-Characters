import axiosInstance from "../config/axios-config";
import Characters from "../types/Characters";

export function getCharacters(pageNo = 0, limit = 10) {
  return axiosInstance.get<Characters>(`/characters`, {
    params: {
      limit,
      offset: pageNo * limit,
    },
  });
}

export function getCharacter(charId: string) {
  return axiosInstance.get<Characters>(`/characters/${charId}`);
}
