import {
  ADD_HOBBY,
  DELETE_HOBBY,
  SET_HOBBIES
} from "../constants/action-types";
import { Hobby } from "../../types";

interface FetchHobbiesAction {
  type: typeof SET_HOBBIES;
  payload: { hobbies: Hobby[] };
}

interface CreateHobbieAction {
  type: typeof ADD_HOBBY;
  payload: {
    hobby: Hobby;
  };
}

interface RemoveHobbieAction {
  type: typeof DELETE_HOBBY;
  payload: {
    hobbyId: number;
  };
}

export type HobbiesActionTypes =
  | FetchHobbiesAction
  | CreateHobbieAction
  | RemoveHobbieAction;

export const setHobbies = (hobbies: Hobby[]): HobbiesActionTypes => ({
  type: SET_HOBBIES,
  payload: {
    hobbies: hobbies
  }
});

export const addHobby = (hobby: Hobby): HobbiesActionTypes => ({
  type: ADD_HOBBY,
  payload: {
    hobby: hobby
  }
});

export const removeHobby = (id: number): HobbiesActionTypes => ({
  type: DELETE_HOBBY,
  payload: {
    hobbyId: id
  }
});

