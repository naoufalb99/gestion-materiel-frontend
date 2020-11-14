import {
  AUTH_CHECK,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_CHECK_ERROR,
} from "../actions/authAction";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_START:
      return { ...state, loading: true };
    case AUTH_CHECK:
    case AUTH_LOGIN_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user,
      };
    case AUTH_LOGIN_ERROR:
      return { ...state, loading: false };

    case AUTH_CHECK_ERROR:
    case AUTH_LOGOUT:
      return { ...initialState, loading: false };
    default:
      return state;
  }
};

export default authReducer;
