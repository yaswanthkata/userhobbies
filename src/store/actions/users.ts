import { ADD_USER, API_REQUEST, SET_USERS, UsersActionTypes } from "../constants/action-types";
import { User } from "../../types";


// Action Creators
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

// Thunk Actions
export const fetchUsers = () => ({
  type: API_REQUEST,
  payload: {
    url: `users`,
    method: "GET",
    onSuccess: setUsers
  }
});

export const createUser = (name: string) => ({
  type: API_REQUEST,
  payload: {
    url: `users`,
    method: "POST",
    data: { name: name },
    onSuccess: addUser
  }
});
