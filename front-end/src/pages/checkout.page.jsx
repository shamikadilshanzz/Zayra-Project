import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CreditCard, Smartphone } from 'lucide-react';
import { useCreateOrderMutation } from "@/lib/api";
import { addOrder, setLoading, setError, clearError } from "@/lib/features/orderSlice";
import c from "./checkout.module.css";
import CartItemCheckout from "@/components/CartItem/CartItemCheckout";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.cartItems);
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [createOrder, { isLoading: isCreatingOrder }] = useCreateOrderMutation();
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  const [promoCode, setPromoCode] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const discountPercentage = 20;
  const discountAmount = subtotal * (discountPercentage / 100);
  let deliveryFee;
  if(cart.length === 0){
    deliveryFee = 0;
  } else {
    deliveryFee = 15;
  }
  const total = subtotal - discountAmount + deliveryFee;

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handlePromoSubmit = () => {
    console.log('Applying promo code:', promoCode);
  };

  const validateForm = () => {
    const errors = {};
    
    if (paymentMethod === 'credit-card') {
      if (!cardDetails.name.trim()) errors.name = 'Name is required';
      if (!cardDetails.number.trim()) errors.number = 'Card number is required';
      if (!cardDetails.expiry.trim()) errors.expiry = 'Expiry date is required';
      if (!cardDetails.cvv.trim()) errors.cvv = 'CVV is required';
      
      if (cardDetails.number && !/^\d{10}$/.test(cardDetails.number.replace(/\s/g, ''))) {
        errors.number = 'Please enter a valid 10-digit card number';
      }
      
      if (cardDetails.expiry && !/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
        errors.expiry = 'Please use MM/YY format';
      }
      
      if (cardDetails.cvv && !/^\d{3,4}$/.test(cardDetails.cvv)) {
        errors.cvv = 'CVV must be 3-4 digits';
      }
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePaymentSubmit = async () => {
    console.log(' PAYMENT SUBMIT CLICKED');
    console.log(' Current cart:', cart);
    console.log(' Current order state:', orderState);
    
    dispatch(clearError());
    
    if (!validateForm()) {
      console.log('❌ Form validation failed:', formErrors);
      return;
    }

    if (cart.length === 0) {
      dispatch(setError('Cart is empty. Please add items to proceed.'));
      return;
    }

    try {
      dispatch(setLoading(true));
      
      const orderData = {
        items: cart.map(item => ({
          productId: item.product._id || item.product.id,
          quantity: item.quantity,
          price: item.product.price
        })),
        paymentMethod: paymentMethod,
        paymentDetails: paymentMethod === 'credit-card' ? {
          name: cardDetails.name,
          cardNumber: cardDetails.number.replace(/\s/g, '').slice(-4),
          expiry: cardDetails.expiry
        } : null,
        subtotal: subtotal,
        discountAmount: discountAmount,
        deliveryFee: deliveryFee,
        total: total,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      console.log(' Order data being sent:', JSON.stringify(orderData, null, 2));
      
      console.log(' Creating order...');
      const result = await createOrder(orderData).unwrap();
      
      console.log('✅ RAW API RESPONSE:', JSON.stringify(result, null, 2));
      
      const orderToStore = result.order || result.data?.order || result;
      console.log(' Order to store in Redux:', JSON.stringify(orderToStore, null, 2));
      
      dispatch(addOrder(orderToStore));
      
      
      setTimeout(() => {
        console.log(' Redux state after dispatch:', {
          currentOrder: orderState.currentOrder,
          orders: orderState.orders
        });
      }, 100);
      
      console.log(' Navigating to success page...');
      navigate('/shop/paymentsl', { 
        state: { 
          order: orderToStore,
          debug: true
        }
      });
      
    } catch (error) {
      console.error('❌ FULL ERROR OBJECT:', error);
      console.error('❌ Error data:', error?.data);
      console.error('❌ Error message:', error?.message);
      
      let errorMessage = 'Failed to create order. Please try again.';
      
      if (error?.data?.message) {
        errorMessage = error.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

  if(cart.length === 0){
    return <Navigate to="/" replace />
  }

  return (
    <main className={c.mainchar}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {orderState.error && (
        <div className={c.errorMessage}>
          <span>⚠️</span>
          <span>{orderState.error}</span>
          <button 
            onClick={() => dispatch(clearError())}
            style={{ 
              marginLeft: 'auto', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: '#dc2626' 
            }}
          >
            ✕
          </button>
        </div>
      )}
      
      {(orderState.loading || isCreatingOrder) && (
        <div style={{ 
          padding: '10px', 
          background: '#e3f2fd', 
          margin: '10px 0', 
          borderRadius: '4px',
          textAlign: 'center' 
        }}>
          <span>Processing your order... Please wait.</span>
        </div>
      )}
      
      <div className={c.cartcontainer}>
        <div className={c.cartitemsection}>
          <h2 className={c.carttitle}>Checkout Page</h2>
          <h3 className={c.secondcarttitle}>Order Details</h3>
         
          {cart.length > 0 ? (
            <div className={c.cartitemsList}>
              {cart.map((item, index) => (
                <CartItemCheckout key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className={c.emptycart}>
              <p>No items in cart</p>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className={c.ordersummary}>
            <div className={c.paymentsection}>
              <h4 className={c.paymenttitle}>Payment Method</h4>

              <div className={c.paymentmethods}>
                <label className={`${c.paymentmethod} ${paymentMethod === 'google-pay' ? c.selected : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="google-pay"
                    checked={paymentMethod === 'google-pay'}
                    onChange={handlePaymentMethodChange}
                  />
                  <Smartphone className={`${c.paymenticon} ${c.googlepayicon}`} />
                  <span className={c.paymentlabel}>Google Pay</span>
                </label>

                <label className={`${c.paymentmethod} ${paymentMethod === 'credit-card' ? c.selected : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={paymentMethod === 'credit-card'}
                    onChange={handlePaymentMethodChange}
                  />
                  <CreditCard className={`${c.paymenticon} ${c.creditcardicon}`} />
                  <span className={c.paymentlabel}>Credit Card</span>
                </label>
              </div>

              {paymentMethod === 'credit-card' && (
                <div className={c.cardform}>
                  <div className={c.formfield}>
                    <label className={c.formlabel}>Name On Card</label>
                    <input
                      type="text"
                      name="name"
                      value={cardDetails.name}
                      onChange={handleCardInputChange}
                      placeholder="Enter name on card"
                      className={`${c.forminput} ${formErrors.name ? c.error : ''}`}
                    />
                    {formErrors.name && <span className={c.errorText}>{formErrors.name}</span>}
                  </div>

                  <div className={c.formfield}>
                    <label className={c.formlabel}>Card Number</label>
                    <input
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardInputChange}
                      placeholder="Enter card number"
                      className={`${c.forminput} ${formErrors.number ? c.error : ''}`}
                    />
                    {formErrors.number && <span className={c.errorText}>{formErrors.number}</span>}
                  </div>

                  <div className={c.formrow}>
                    <div className={c.formfield}>
                      <label className={c.formlabel}>Expiration Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardInputChange}
                        placeholder="MM/YY"
                        className={`${c.forminput} ${formErrors.expiry ? c.error : ''}`}
                      />
                      {formErrors.expiry && <span className={c.errorText}>{formErrors.expiry}</span>}
                    </div>
                    <div className={c.formfield}>
                      <label className={c.formlabel}>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardInputChange}
                        placeholder="Enter CVV"
                        className={`${c.forminput} ${formErrors.cvv ? c.error : ''}`}
                      />
                      {formErrors.cvv && <span className={c.errorText}>{formErrors.cvv}</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
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
               
            <div className={c.checkoutbutton}>
              <button 
                className={c.checkoutlink}
                onClick={handlePaymentSubmit}
                disabled={isCreatingOrder || orderState.loading}
                style={{
                  opacity: (isCreatingOrder || orderState.loading) ? 0.6 : 1,
                  cursor: (isCreatingOrder || orderState.loading) ? 'not-allowed' : 'pointer'
                }}
              >
                {(isCreatingOrder || orderState.loading) 
                  ? 'Processing...' 
                  : `Pay Now $${total.toFixed(2)} →`
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );    
}

export default CheckoutPage;