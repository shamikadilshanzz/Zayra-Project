const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products?category=${category}`, {
  method: "GET",
  headers: { "Content-Type": "application/json" },
});
