import axiosInstance from "../config/axios-config";
import Characters from "../types/Characters";

export function getCharacters(pageNo = 0) {
  return axiosInstance.get<Characters>(`/characters`, {
    params: {
      limit: 10,
      offset: pageNo * 10,
    },
  });
}

export function getCharacter(charId: string) {
  return axiosInstance.get<Characters>(`/characters/${charId}`);
}
