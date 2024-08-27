import axios from "axios";
const API_URL = "https://locka-cb5820800811.herokuapp.com/api/projects/";

const fetchProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data.data;
};

const getProject = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + id, config);
  return response.data.data;
};

const createProject = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, data, config);
  console.log(response.data.data);
  return response.data;
};

const updateProject = async ({ id, ...data }, token) => {
  console.log(id, data);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + id, data, config);
  console.log(response.data.data);
  return response.data;
};

const deleteProject = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};

const projectService = {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
};

export default projectService;
