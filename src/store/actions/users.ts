import { ADD_USER, SET_USERS } from "../constants/action-types";
import { User } from "../../types";

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

export type UsersActionTypes = GetUsersAction | CreateUserAction;

export const setUsers = (users: User[]): UsersActionTypes => ({
  type: SET_USERS,
  payload: {
    users: users
  }
});

export const addUser = (user: User): UsersActionTypes => ({
  type: ADD_USER,
  payload: {
    user: user
  }
});
