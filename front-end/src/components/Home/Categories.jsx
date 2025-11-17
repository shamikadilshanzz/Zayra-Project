import cat from "./Categories.module.css";

function Categories() {
  return (
    <div className={cat.categoriesSection}>
        <div className={cat.categoriesContainer}>
            <h2>Categories</h2>
        <div className={cat.categories}>
            <div className={cat.categoryItem}>Laptops</div>
            <div className={cat.categoryItem}>Desktops</div>
            <div className={cat.categoryItem}>Headphones</div>
            <div className={cat.categoryItem}>Smartphones</div>
            <div className={cat.categoryItem}>Watches</div>
        </div>
        </div>
    </div>
  );
}

export default Categories;
