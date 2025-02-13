import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getProductDetail = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
};