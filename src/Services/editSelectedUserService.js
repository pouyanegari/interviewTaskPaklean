import http from "./httpServices";

export default function editSelectedUserService(id, data) {
  return http.put(`/users/${id}`, data);
}
