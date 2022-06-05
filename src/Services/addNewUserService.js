import http from "./httpServices";

export default function addNewUserService(data) {
  return http.post("/users", data);
}
