import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { hobbiesReducer } from "./hobbies";

const rootReducer = combineReducers({users: usersReducer, hobbies: hobbiesReducer})

export default rootReducer;