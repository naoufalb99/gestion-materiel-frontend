import axios from "axios";
import config from "../config";

const authToken = localStorage.getItem("token");

axios.defaults.baseURL = config.api_url;
axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

export default axios;
