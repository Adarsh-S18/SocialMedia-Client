import axios from "axios"

const header = localStorage.getItem("accessToken")
  ? {
    token: "Bearer " + localStorage.getItem("accessToken"),
  }
  : {
    token: "Bearer ",
  };

console.log(header, "okkkkkkkkkkk");

const instance = axios.create({
  baseURL : "https://api.hectrum.online/api" , //:"http://localhost:5000/api"
  headers: header,
  withCredentials: true,
});
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
export default instance;