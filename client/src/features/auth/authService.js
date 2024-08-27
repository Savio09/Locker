import axios from "axios";
const API_URL = "/user/";

const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + "signup", userData);
    // if (response.data) {
    //   localStorage.setItem("user", JSON.stringify(response.data.token));
    // }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
