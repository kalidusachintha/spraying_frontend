import axios from "axios";

axios.defaults.baseURL = "http://local.spraying.com:8080";
axios.defaults.withCredentials = true;

export default axios;
