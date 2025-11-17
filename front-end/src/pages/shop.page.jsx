import { useGetAllProductsQuery } from "@/lib/api";

function ShopPage() {
  const { 
    data: products, 
    isLoading, 
    isError, 
    error 
  } = useGetAllProductsQuery(); 

  if (isLoading) {
    return <main><h1>ShopPage</h1><p>Loading...</p></main>;
  }

  if (isError) {
    return (
      <main>
        <h1>ShopPage</h1>
        <p style={{ color: "red" }}>
          Error: {error?.status} - {error?.error || JSON.stringify(error.data)}
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1>ShopPage</h1>
      {products && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </main>
  );
}

export default ShopPage;
