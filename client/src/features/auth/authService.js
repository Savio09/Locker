import axios from "axios";
const API_URL = "https://locka-cb5820800811.herokuapp.com/user/";

const register = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "signin", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
