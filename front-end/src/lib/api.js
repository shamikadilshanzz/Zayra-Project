import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: async (headers) => {
      const clerk = window.Clerk;

      if (clerk && clerk.session) {
        try {
          const token = await clerk.session.getToken();
          if (token) {
            headers.set("Authorization", `Bearer ${token}`);
          }
        } catch (err) {
          console.error("Error fetching token:", err);
        }
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => `/products`,
    }),
    createOrder: build.mutation({
      query: (orderData) => ({
        url: `/orders`,
        method: "POST",
        body: orderData,
      }),
    }),
    createProduct: build.mutation({
      query: (productData) => ({
        url: `/products`,
        method: "POST",
        body: productData,
      }),
    }),
    getCategories: build.query({
      query: () => `/categories`,
    }),
  }),
});

export const { 
  useGetAllProductsQuery, 
  useCreateOrderMutation,
  useCreateProductMutation,
  useGetCategoriesQuery
} = Api;
