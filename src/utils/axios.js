import axios from "axios";
import store from "../store";
import config from "../config";
import authBrowserStorage from "./authBrowserStorage";
import { setAlert } from "../actions/alertActions";

const { token: authToken } = authBrowserStorage.get();

axios.defaults.baseURL = config.api_url;
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { message } = error.response.data;
      if (message) {
        store.dispatch(setAlert(message));
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
