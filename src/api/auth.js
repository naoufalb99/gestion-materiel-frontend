import axios from "axios";

export default {
  login(email, password) {
    return axios.post("/user/login", { email, password });
  },

  checkToken(token) {
    return axios.post("/user/check", { token });
  },
};
