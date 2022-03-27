import axios from "axios";

const apiUrl = "http://localhost:8080/api/tasks";

export const getTasks = () => {
  return axios.get(apiUrl);
};

export const addTask = (task) => {
  return axios.post(apiUrl, task);
};

export const updateTask = (id, task) => {
  return axios.put(apiUrl + "/" + id, task);
};

export const deleteTask = (id) => {
  return axios.delete(apiUrl + "/" + id);
};
