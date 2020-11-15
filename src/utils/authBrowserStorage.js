const TOKEN_INDEX = "token";
const USER_INDEX = "user";
const REMEMBERME_INDEX = "rememberMe";

// TODO: sharing sessionStorage between tabs

const authBrowserStorage = {
  get() {
    let Storage = sessionStorage;
    const rememberMe = localStorage.getItem(REMEMBERME_INDEX);
    if (rememberMe === "true") {
      Storage = localStorage;
    }
    return {
      token: Storage.getItem(TOKEN_INDEX),
      user: JSON.parse(Storage.getItem(USER_INDEX)),
    };
  },
  set(token, user, rememberMe = false) {
    let Storage = sessionStorage;
    if (rememberMe) {
      Storage = localStorage;
    }
    Storage.setItem(TOKEN_INDEX, token);
    Storage.setItem(USER_INDEX, JSON.stringify(user));
    localStorage.setItem(REMEMBERME_INDEX, !!rememberMe);
  },
  remove() {
    [localStorage, sessionStorage].forEach((Storage) => {
      Storage.removeItem(TOKEN_INDEX);
      Storage.removeItem(USER_INDEX);
    });
  },
};

export default authBrowserStorage;
