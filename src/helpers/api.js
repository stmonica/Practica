import { API_ROUTE } from "../config/api";
import Category from "../models/category";
import Product from "../models/product"

const ApiClient = {
  get: (url, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "GET", {}, headers);

  },
  getById: (url, id, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}/${id}`, "GET", {}, headers);

  },
  create: (url, category, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "POST", category, headers);

  },
  update: (url, category, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "PUT", category, headers);

  },
  delete: (url, category, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "DELETE", category, headers);

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

  getById: async (category) => {
    const varcategory  = await ApiClient.getById("category", category);
    console.log(varcategory);
    return new Category(varcategory.categoryId, varcategory.name, varcategory.description)
  },

  create : async (category) => {
    const varcategory = await ApiClient.create("category", category);
    console.log(varcategory);
    return new Category(varcategory.categoryId, varcategory.name, varcategory.description)
  },

  update: async (category) => {
    const varcategory = await ApiClient.update("category", category);
    console.log(varcategory);
    return new Category(varcategory.categoryId, varcategory.name, varcategory.description)
  },
  
  delete: async (category) => {
    const varcategory = await ApiClient.update("category", category);
    console.log(varcategory);
  
  },
};

const CategoryProducts = {
  all: async () => {
    const { products } = await ApiClient.get("product");
    return products.map(
      (c) => new Product(c.productId, c.name, c.description, c.price, c.basePrice, c.categoryId, c.filename)
    );
  },
};

const ApiHelper = {
  ProductCategories,
  CategoryProducts,
};
export default ApiHelper;
