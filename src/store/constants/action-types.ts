import { Hobby, User } from "../../types";

// Users
export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";

// Hobbies
export const ADD_HOBBY = "ADD_HOBBY";
export const DELETE_HOBBY = "DELETE_HOBBY";
export const SET_HOBBIES = "SET_HOBBBIES";

export const API_REQUEST = "API_REQUEST";

interface GetUsersAction {
  type: typeof SET_USERS;
  payload: {
    users: User[];
  };
}

interface CreateUserAction {
  type: typeof ADD_USER;
  payload: {
    user: User;
  };
}

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
export type UsersActionTypes = GetUsersAction | CreateUserAction;

export type HobbiesActionTypes =
  | FetchHobbiesAction
  | CreateHobbieAction
  | RemoveHobbieAction;
