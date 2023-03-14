import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const register = (username, email, password) => {
  return api.post("/register", {
    username,
    email,
    password,
  });
};

export const login = (email, password) => {
  return api.post("/login", {
    email,
    password,
  });
};

export const logout = () => {
  return api.get("/logout");
};
