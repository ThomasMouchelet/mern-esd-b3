import axios from 'axios';

function getPosts() {
  return axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    .then(response => response.data);
}

function deletePost(id) {
  return axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`)
    .then(response => response.data);
}

function create(credentials) {
  return axios.post(`${process.env.REACT_APP_API_URL}/posts`, credentials)
    .then(response => response.data);
}

function getPost(id){
  return axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
    .then(response => response.data);
}

export {
    getPosts,
    deletePost,
    create,
    getPost
}