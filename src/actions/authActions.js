import authAPI from "../api/auth";
import authBrowserStorage from "../utils/authBrowserStorage";

export const AUTH_LOGIN_START = "@auth/login/start";
export const AUTH_LOGIN_SUCCESS = "@auth/login/success";
export const AUTH_LOGIN_ERROR = "@auth/login/error";

export const AUTH_CHECK_ERROR = "@auth/check/error";
export const AUTH_CHECK_SUCCESS = "@auth/check/success";

export const AUTH_LOGOUT = "@auth/logout";

export function login(email, password, rememberMe = false) {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN_START,
    });

    authAPI
      .login(email, password)
      .then(({ data }) => {
        authBrowserStorage.set(data.token, data.user, rememberMe);
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: AUTH_LOGIN_ERROR });
        // console.log(err.response.status);
      });
  };
}

export function logout() {
  return (dispatch) => {
    authBrowserStorage.remove();
    dispatch({ type: AUTH_LOGOUT });
  };
}

export function checkToken() {
  return (dispatch) => {
    const { token, user } = authBrowserStorage.get();
    if (token) {
      authAPI
        .checkToken(token)
        .then(() => {
          if (!user) throw new Error("user undefined");
          dispatch({ type: AUTH_CHECK_SUCCESS, payload: { token, user } });
        })
        .catch(() => {
          authBrowserStorage.remove();
          dispatch({ type: AUTH_CHECK_ERROR });
        });
    } else dispatch({ type: AUTH_CHECK_ERROR });
  };
}
