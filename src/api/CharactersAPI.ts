import axiosInstance from "../config/axios-config";
import Character from "../types/Character";


export type GetCharsResponseEle = {
  _id: string
  name: string,
  occupation: string[],
  birth_date: string
}
export type GetCharsResponse = GetCharsResponseEle[]

export function getCharacters(pageNo = 0, limit = 10) {
  return axiosInstance.get<GetCharsResponse>(`/characters`, {
    params: {
      limit,
      offset: pageNo * limit,
    },
  });
}

export function getCharacter(charId: string) {
  return axiosInstance.get<Character>(`/characters/${charId}`);
}
