import { products, categories } from "../../data";
import SimpleProductCard from "./SimpleProductCard";
import styles from "./TrendingSection.module.css";
import CategoryButton from "./CategoryButton";
import { useState } from "react"; 

function TrendingSection() { 
  const [selectedCategoryId, setSelectedCategoryId] = useState("all"); 
  
  const filteredProducts = selectedCategoryId === "all" 
    ? products  
    : products.filter((product) => product.categoryId === selectedCategoryId); 

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Trending</h2>
        <div className={styles.categoryList}>
          {categories?.map((category) => (
            <CategoryButton 
              key={category._id} 
              category={category} 
              selectedCategoryId={selectedCategoryId}
              onClick={setSelectedCategoryId}
            />
          ))}
        </div>
      </div>

      <div className={styles.productsGrid}>
        {filteredProducts.map((product, index) => (
          <SimpleProductCard 
            key={`${product._id}-${index}`}
            product={product} 
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;