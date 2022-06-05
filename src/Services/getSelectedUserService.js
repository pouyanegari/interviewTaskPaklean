import http from "./httpServices";

export default function getSelectedUserService(id) {
  return http.get(`/users/${id}`);
}
