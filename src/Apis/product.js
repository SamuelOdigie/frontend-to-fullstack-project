import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const getAllProducts = () => {
  return api.get("/products");
};

export const getProductById = (productId) => {
  return api.get(`/products/${productId}`);
};

export const createProduct = (product) => {
  return api.post("/products", product);
};

export const updateProduct = (productId, updates) => {
  return api.put(`/products/${productId}`, updates);
};

export const deleteProduct = (productId) => {
  return api.delete(`/products/${productId}`);
};
