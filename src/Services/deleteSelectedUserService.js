import http from "./httpServices";

export default function deleteSelectedUserService(id) {
  return http.delete(`/users/${id}`);
}
