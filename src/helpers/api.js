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
  post: (url, category, headers) => {
    return ApiClient.makeRequest(`${API_ROUTE}/${url}`, "POST", category, headers);

  },
  put: (url, category, headers) => {
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

  getById: async (id) => {
    const  varcategory  = await ApiClient.get(`category/${id}`);
    return varcategory;
  },

  create : async (category) => {
    const varcategory = await ApiClient.post("category", category,{"Content-Type": "application/json"});
    
    return new Category(varcategory.categoryId, varcategory.name, varcategory.description)
  },

  update: async (id, category) => {
    const varcategory = await ApiClient.put(`category/${id}`, category,{"Content-Type": "application/json"});
   
    return varcategory;
 },
  
  
  delete: async (id) => {
     await ApiClient.delete(`category/${id}`,{"Content-Type": "application/json"});

  
  },
};

const CategoryProducts = {
  all: async () => {
    const { products } = await ApiClient.get("product");
    return products.map(
      (c) => new Product(c.productId, c.name, c.description, c.price, c.basePrice, c.categoryId, c.filename)
    );
  },

  get: async (id) => {
    const  products  = await ApiClient.get(`product/${id}`);
    return products;
  
  },


 create: async (category) => {
    const  varproduct  = await ApiClient.post("product", category,{"Content-Type": "application/json"});
    return new Product(varproduct.productId, varproduct.name, varproduct.description, varproduct.price, varproduct.basePrice, varproduct.categoryId, varproduct.filename)
    
  },

 update: async (id, category) => {
     await ApiClient.put(`product/${id}`, category,{"Content-Type": "application/json"});
   
    
  },

 delete: async (id) => {
   await ApiClient.delete(`product/${id}`,{"Content-Type": "application/json"});
    
  },
};


const ApiHelper = {
  ProductCategories,
  CategoryProducts,
};
export default ApiHelper;
