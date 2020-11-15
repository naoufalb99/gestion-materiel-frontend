import { setLoader } from "../actions/loadersActions";

const loaderMiddleware = (storeAPI) => (next) => (action) => {
  next(action);
  const dispatch = storeAPI.dispatch;
  if (action.type) {
    const [namespace, key, type] = action.type.split("/");
    if (type === "error" || type === "success") {
      dispatch(setLoader(namespace.slice(1), key, false));
    } else if (type === "start") {
      dispatch(setLoader(namespace.slice(1), key, true));
    }
  }
};

export default loaderMiddleware;
