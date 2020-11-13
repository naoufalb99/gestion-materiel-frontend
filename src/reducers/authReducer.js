import {
  AUTH_CHECK_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
} from "../actions/authAction";

const initialState = {
  isAuthenticated: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, loading: true };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true };

    case AUTH_CHECK_SUCCESS:
      return { ...state, loading: false, isAuthenticated: false };
    default:
      return state;
  }
};

export default authReducer;
