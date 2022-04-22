import api from "./api.service"

function getPosts() {
  return api.get(`/posts`)
    .then(response => response.data);
}

function deletePost(id) {
  return api.delete(`/posts/${id}`)
    .then(response => response.data);
}

function create(credentials) {
  return api.post(`/posts`, credentials)
    .then(response => response.data);
}

function getPost(id){
  return api.get(`/posts/${id}`)
    .then(response => response.data);
}

function update(id, credentials) {
  return api.put(`/posts/${id}`, credentials)
    .then(response => response.data);
}

export {
    getPosts,
    deletePost,
    create,
    getPost,
    update
}