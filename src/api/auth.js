import axios from "axios";

const authAPI = {
  login(email, password) {
    return axios.post("/user/login", { email, password });
  },

  checkToken(token) {
    return axios.post("/user/check", { token });
  },
};

export default authAPI;
