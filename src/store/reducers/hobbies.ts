import * as actionTypes from "../constants/action-types";
import { Hobby } from "../../types";

export interface IHobbyState {
  readonly hobbies: Hobby[];
}
const intialHobbyState: IHobbyState = {
  hobbies: []
};

export const hobbiesReducer = (
  state = intialHobbyState,
  action: any
): IHobbyState => {
  switch (action.type) {
    case actionTypes.SET_HOBBIES: {
      return { ...state, hobbies: action.payload.hobbies };
    }

    case actionTypes.ADD_HOBBY: {
      return { ...state, hobbies: [...state.hobbies, action.payload.hobby] };
    }

    case actionTypes.DELETE_HOBBY: {
      return {
        ...state,
        hobbies: state.hobbies.filter(
          hobby => hobby.id !== action.payload.hobbyId
        )
      };
    }

    default:
      return state;
  }
};
