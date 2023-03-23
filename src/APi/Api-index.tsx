import axios from "axios";

const api = axios.create({
  baseURL: "https://webservices.jumpingcrab.com/",
});

export default api;
