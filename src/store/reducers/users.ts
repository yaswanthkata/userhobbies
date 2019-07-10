import * as actionTypes from "../constants/action-types";
import { User } from "../../types";
import { UsersActionTypes } from "../constants/action-types";

export interface IUserState {
  readonly users: User[];
}
const intialUserState: IUserState = {
  users: []
};
export const usersReducer = (
  state = intialUserState,
  action: UsersActionTypes
): IUserState => {
    
  switch (action.type) {
    case actionTypes.SET_USERS: {
      return { ...state, users: [...action.payload.users] };
    }

    case actionTypes.ADD_USER: {
      return { ...state, users: [...state.users, action.payload.user] };
    }

    default:
      return state;
  }
};
