export const AUTH_LOGIN = "@auth/login";
export const AUTH_LOGIN_SUCCESS = "@auth/login/success";

export const AUTH_CHECK = "@auth/check";
export const AUTH_CHECK_SUCCESS = "@auth/check/success";

export function login(email, password) {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN,
    });
    setTimeout(() => {
      dispatch({ type: AUTH_LOGIN_SUCCESS });
    }, 3000);
  };
}

export function checkToken() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: AUTH_CHECK_SUCCESS });
    }, 2000);
  };
}
