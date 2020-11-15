import { LOADERS_SET } from "../actions/loadersActions";

const initialState = {
  auth: {
    login: false,
    check: true,
  },
};

const loadersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADERS_SET:
      const { namespace, key, value } = action;
      return { ...state, [namespace]: { ...state[namespace], [key]: value } };
    default:
      return state;
  }
};

export default loadersReducer;
