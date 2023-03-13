import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const addToCart = (productId, quantity) => {
  return api.post("/cart", {
    productId,
    quantity,
  });
};

export const getCartItems = () => {
  return api.get("/cart");
};

export const updateCartItem = (itemId, quantity) => {
  return api.put(`/cart/${itemId}`, {
    quantity,
  });
};

export const removeCartItem = (itemId) => {
  return api.delete(`/cart/${itemId}`);
};
