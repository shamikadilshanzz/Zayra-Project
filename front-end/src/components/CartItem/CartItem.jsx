import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "@/lib/features/cartSlice";
import cartitemcss from "./CartItem.module.css";

function CartItem({ item }) {
  const dispatch = useDispatch();
  
  const handleQuantityDecrease = () => {
    dispatch(decreaseQuantity(item.product._id));
  };
  
  const handleQuantityIncrease = () => {
    dispatch(increaseQuantity(item.product._id));
  };
  
  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.product._id));
  };
  
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
          
          <div className={cartitemcss.actions}>
            <button
              className={cartitemcss.deletebutton}
              onClick={handleRemoveItem}
              aria-label="Remove item"
            >
              🚫
            </button>
            <div className={cartitemcss.quantitycontrol}>
              <button
                className={cartitemcss.quantitybutton}
                onClick={handleQuantityDecrease}
                disabled={item.quantity <= 1}
              >
                −
              </button>
              <span className={cartitemcss.quantity}>{item.quantity}</span>
              <button
                className={cartitemcss.quantitybutton}
                onClick={handleQuantityIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;