import { combineReducers } from "redux";
import { usersReducer, IUserState } from "./users";
import { hobbiesReducer, IHobbyState } from "./hobbies";

export interface IApplicationState {
  users: IUserState;
  hobbies: IHobbyState;
}
const rootReducer = combineReducers<IApplicationState>({
  users: usersReducer,
  hobbies: hobbiesReducer
});

export default rootReducer;
