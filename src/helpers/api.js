import { API_ROUTE } from "../config/api";
import Category from "../models/category";

const ApiClient = {
  get: (url, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "GET", {}, headers);
  },

  makeRequest: async (url, type, params = {}, headers = {}) => {
    try {
      type = type.toUpperCase();
      const request = {
        method: type,
        headers: headers,
      };
      if (type === "POST" || type === "PUT") {
        request.body = JSON.stringify(params);
      }

      const result = await fetch(url, request);
      return await result.json();
    } catch (error) {
      console.log(error.message);
    }
  },
};

const ProductCategories = {
  all: async () => {
    const { categories } = await ApiClient.get("category");

    return categories.map(
      (c) => new Category(c.categoryId, c.name, c.description)
    );
  },
};

const ApiHelper = {
  ProductCategories,
};
export default ApiHelper;
