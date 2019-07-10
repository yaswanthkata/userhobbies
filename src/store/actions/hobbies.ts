import {
  ADD_HOBBY,
  DELETE_HOBBY,
  API_REQUEST,
  SET_HOBBIES,
  HobbiesActionTypes
} from "../constants/action-types";
import { Hobby } from "../../types";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { AnyAction } from "redux";
import { config } from "../../config";

// Action Creators
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

// Thunk Actions
export const fetchHobbies = (userId: number) => ({
  type: API_REQUEST,
  payload: {
    url: `user/${userId}/hobbies`,
    method: "GET",
    onSuccess: setHobbies
  }
});

export const createHobby = (hobby: Hobby) => ({
  type: API_REQUEST,
  payload: {
    url: "hobbies",
    method: "POST",
    data: hobby,
    onSuccess: addHobby
  }
});

export const deleteHobby = (id: number): any => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<void> => {
  await axios.delete(config.API_URL + `hobbies/${id}`);
  dispatch(removeHobby(id));
};
