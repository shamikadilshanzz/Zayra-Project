import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/lib/features/cartSlice';
import { clearCurrentOrder } from '@/lib/features/orderSlice';
import styles from './payment.module.css';
import Navigation from '@/components/Navigation/Navigation';

const PaymentSuccess = ({ onClose, onContinueShopping }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  const currentOrder = useSelector((state) => state.order.currentOrder);
  const allOrders = useSelector((state) => state.order.orders);
  const fullOrderState = useSelector((state) => state.order);
  
  const orderFromState = location.state?.order;
  
  const order = currentOrder || orderFromState;

  console.log('🔍 PAYMENT SUCCESS DEBUG:');
  console.log('📍 Location state:', location.state);
  console.log('🏪 Full Redux order state:', fullOrderState);
  console.log('📦 Current order from Redux:', currentOrder);
  console.log('📋 All orders from Redux:', allOrders);
  console.log('🧭 Order from navigation state:', orderFromState);
  console.log('✅ Final order to display:', order);

  useEffect(() => {
    dispatch(clearCart());
    console.log('🛒 Cart cleared');
    
  }, [dispatch]);

  const handleClose = () => {
    if (onClose) onClose();
    dispatch(clearCurrentOrder());
    navigate('/');
  };

  const handleContinue = () => {
    if (onContinueShopping) onContinueShopping();
    dispatch(clearCurrentOrder());
    navigate('/');
  };

  return (
    <div className={styles.overlay}>
      <Navigation/>
      <div className={styles.modal}>
        <Link
          to="/"
          className={styles.closeButton}
          aria-label="Close"
          onClick={() => dispatch(clearCurrentOrder())}
        >
          <X size={20} />
        </Link>

        <div className={styles.checkIconContainer}>
          <Check className={styles.checkIcon} />
        </div>

        <h1 className={styles.title}>Payment Successful 🎉</h1>

        <p className={styles.subtitle}>
          Your payment has been successfully processed. Now you can go to the homepage & discover new products.
        </p>

        {order ? (
          <div className={styles.orderDetails}>
            <h3>Order Details</h3>
            <div className={styles.orderInfo}>
              <p><strong>Order ID:</strong> {order._id || order.id || 'Processing...'}</p>
              <p><strong>Total Amount:</strong> ${order.total?.toFixed(2) || '0.00'}</p>
              <p><strong>Items:</strong> {order.items?.length || 0}</p>
              <p><strong>Status:</strong> {order.status || 'Pending'}</p>
              {order.paymentMethod && (
                <p><strong>Payment Method:</strong> {order.paymentMethod.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              )}
              {order.createdAt && (
                <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
              )}
              {order.subtotal && (
                <p><strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}</p>
              )}
              {order.discountAmount && (
                <p><strong>Discount:</strong> -${order.discountAmount.toFixed(2)}</p>
              )}
              {order.deliveryFee && (
                <p><strong>Delivery Fee:</strong> ${order.deliveryFee.toFixed(2)}</p>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.orderDetails}>
            <h3>Order Details</h3>
            <div className={styles.orderInfo}>
              <p><strong>Order ID:</strong> N/A</p>
              <p><strong>Total Amount:</strong> $N/A</p>
              <p><strong>Items:</strong> 0</p>
              <p><strong>Status:</strong> N/A</p>
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Order details are being processed... You will receive an email confirmation shortly.
              </p>
            </div>
          </div>
        )}

        <button
          className={styles.continueButton}
          onClick={handleContinue}
        >
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;