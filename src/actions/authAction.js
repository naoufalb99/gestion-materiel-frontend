import authAPI from "../api/auth";

export const AUTH_LOGIN_START = "@auth/login/start";
export const AUTH_LOGIN_SUCCESS = "@auth/login/success";
export const AUTH_LOGIN_ERROR = "@auth/login/error";

export const AUTH_CHECK = "@auth/check";
export const AUTH_CHECK_ERROR = "@auth/check/error";

export const AUTH_LOGOUT = "@auth/logout";

export function login(email, password) {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN_START,
    });

    authAPI
      .login(email, password)
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: AUTH_LOGOUT });
  };
}

export function checkToken() {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      authAPI
        .checkToken(token)
        .then(() => {
          const user = JSON.parse(localStorage.getItem("user"));
          if (!user) throw new Error("user undefined");
          dispatch({ type: AUTH_CHECK, payload: { token, user } });
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          dispatch({ type: AUTH_CHECK_ERROR });
        });
    } else dispatch({ type: AUTH_CHECK_ERROR });
  };
}
