import axios from "axios";
const API_URL = "/api/tasks/";

const fetchTasks = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + id, config);
  return response.data.data;
};

const createTask = async (token, { id, ...data }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + id, data, config);
  return response.data;
};

const deleteTask = async (token, { projId, taskId }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + projId + "/" + taskId, config);
  return response.data;
};

const projectService = {
  fetchTasks,
  createTask,
  deleteTask,
};

export default projectService;
