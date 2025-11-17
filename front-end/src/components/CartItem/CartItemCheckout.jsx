import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import cartitemcss from "./Cartitem.module.css";

function CartItemCheckout({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={cartitemcss.cartitem}>
      <div className={cartitemcss.cartcontent}>
        <div className={cartitemcss.imagecontainer}>
          <img
            src={item.product.image || "/placeholder.svg"}
            alt={item.product.name}
            className={cartitemcss.cartimage}
          />
        </div>
        
        <div className={cartitemcss.productdetails}>
          <div className={cartitemcss.productinfo}>
            <h3 className={cartitemcss.productname}>{item.product.name}</h3>
            <div className={cartitemcss.productprice}>${item.product.price}</div>
            <div className={cartitemcss.productmeta}>
              <span className={cartitemcss.metaitem}>
                Description: {item.product.description}
              </span>
              <div className={cartitemcss.rating}>
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <FaStar
                            key={i}
                            className={`${cartitemcss.star} ${
                            i < Math.round(item.product.rating) ? cartitemcss.starActive : ""
                            }`}
                        />
                        ))}
                    <span className={cartitemcss.reviewCount}>({item.product.reviews})</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCheckout;