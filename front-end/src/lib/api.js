const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:8000" : "");

if (!API_BASE_URL && import.meta.env.PROD) {
  console.error(
    "VITE_API_URL is not set. Please configure it in your Vercel environment variables."
  );
}

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL + "/api",
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
