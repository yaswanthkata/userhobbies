import { usersReducer, IUserState } from "../users";
import { UsersActionTypes } from "../../constants/action-types";
import * as mockData from "../../../mocks/mock-data";

const intialUserState: IUserState = {
  users: []
};

describe("users reducer", () => {
  it("handles a SET_USERS action", () => {
    const action: UsersActionTypes = {
      type: "SET_USERS",
      payload: {
        users: mockData.users
      }
    };

    const result = usersReducer(intialUserState, action);

    expect(result.users).toEqual([
      { id: 1, name: "Yaswanth kata", thumbnail: "" },
      { id: 2, name: "Pulkit", thumbnail: "" }
    ]);
  });
  it("handles a ADD_USER action", () => {
    const action: UsersActionTypes = {
      type: "ADD_USER",
      payload: {
        user: {
          id: 3,
          name: "Max",
          thumbnail: ""
        }
      }
    };

    const result = usersReducer(intialUserState, action);

    expect(result.users.length).toEqual(1);
  });
});
