import http from "./httpServices";

export default function getAllUsersService() {
  return http.get("/users");
}
