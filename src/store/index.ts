import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/users";
import { hobbiesReducer } from "./reducers/hobbies";
import apiMiddleware from "./middleware/apiMiddleware";

const store = createStore(
  combineReducers({
    users: usersReducer,
    hobbies: hobbiesReducer
  }),
  applyMiddleware(thunk, apiMiddleware)
);

export default store;
