import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "@/components/CartItem/CartItem";
import c from "../pages/cart.page.module.css"

function CartPage() {
  const cart = useSelector((state) => state.cart.cartItems);

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const discountPercentage = 20;
  const discountAmount = subtotal * (discountPercentage / 100);
  let deliveryFee;
  if(cart.length == 0){
    deliveryFee = 0;
  }else{
    deliveryFee = 15;
  }
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <main className={c.mainchar}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={c.cartcontainer}>
        <div className={c.cartitemsection}>
          <h2 className={c.carttitle}>Cart Package</h2>
          
          {cart.length > 0 ? (
            <div className={c.cartitemsList}>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className={c.emptycart}>
              <p>No items in cart</p>
            </div>
          )}
        </div>

        {cart.length >= 0 && (
          <div className={c.ordersummary}>
            <h3 className={c.summarytitle}>Order Summary</h3>
            
            <div className={c.summarydetails}>
              <div className={c.summaryrow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className={c.summaryrow}>
                <span>Discount (-{discountPercentage}%)</span>
                <span className={c.discount}>-${discountAmount.toFixed(2)}</span>
              </div>
              
              <div className={c.summaryrow}>
                <span>Delivery Fee</span>
                <span>${deliveryFee}</span>
              </div>
              
              <hr className={c.divider} />
              
              <div className={c.summaryrowtotal}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className={c.promocode}>
              <div className={c.promoinput}>
                <input 
                  type="text" 
                  placeholder="Add promo code"
                  className={c.promoinputfield}
                />
                <button className={c.promobutton}>Apply</button>
              </div>
            </div>

            <div className={c.checkoutbutton}>
              <Link to="/shop/cart/checkout" className={c.checkoutlink}>
                Go to Checkout →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default CartPage;