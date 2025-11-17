import { FaStar } from "react-icons/fa";
import styles from "./SimpleProductCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";

function SimpleProductCard({ product }) { 

  const dispatch = useDispatch()
  const [active, setActive] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <button
          className={`${styles.wishlist} ${active ? styles.active : ""}`}
          onClick={() => setActive(!active)}
        >
          ❤
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.rating}>
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar
                key={i}
                className={`${styles.star} ${
                  i < Math.round(product.rating) ? styles.starActive : ""
                }`}
              />
            ))}
          <span className={styles.reviewCount}>({product.reviews})</span>
        </div>

        <button className={styles.addBtn} onClick={() => dispatch(addToCart({
          _id: product._id, 
          name: product.name, 
          price: product.price,
          image: product.image,
          description: product.description,
          rating: product.rating,
          reviews: product.reviews
                })
              )
            }
          >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SimpleProductCard;