import axios from "axios";
import { MiddlewareAPI, AnyAction, Dispatch } from "redux";
import { API_REQUEST } from "../constants/action-types";
import { config } from "../../config";

const apiMiddleware = ({ dispatch }: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  next(action);

  if (action.type !== API_REQUEST) return;

  const { url, method, data, onSuccess, headers } = action.payload;

  axios.defaults.baseURL = config.API_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios
    .request({
      url,
      method,
      data,
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
