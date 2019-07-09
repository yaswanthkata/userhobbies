import axios from "axios";
import { MiddlewareAPI, AnyAction, Dispatch } from "redux";
import { API_REQUEST } from "../constants/action-types";

const apiMiddleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  next(action);

  if (action.type !== API_REQUEST) return;

  const { url, method, data, onSuccess, headers } = action.payload;
  
  axios.defaults.baseURL = "http://localhost:4000/";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  const dataProperty = ["GET"].includes(method) ? "params" : "data";

  axios
    .request({
      url,
      method,
      [dataProperty]: data,
      headers
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      console.log(error);
    });
};

export default apiMiddleware;
