import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(userid) {
    return http.get(`/tutorials/${userid}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(userid, data) {
    return http.put(`/tutorials/${userid}`, data);
  }

  delete(userid) {
    return http.delete(`/tutorials/${userid}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(email) {
    return http.get(`/tutorials?title=${email}`);
  }
}

export default new TutorialDataService();