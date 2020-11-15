import {
  AUTH_CHECK_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from "../actions/authActions";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHECK_SUCCESS:
    case AUTH_LOGIN_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload.token,
        user: payload.user,
      };

    case AUTH_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
