import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css'
import './theme.css'
import HomePage from './pages/home.page'; 
import SignInPage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';
import ShopPage from './pages/shop.page';
import RootLayout from './layouts/root.layout.jsx';
import { store } from './lib/store';
import { Provider } from 'react-redux';
import CartPage from './pages/cart.page';
import CheckoutPage from './pages/checkout.page';
import PaymentSuccess from './pages/paymentSuccessfull.page';
import AboutPage from './pages/about.page';
import Footer from './components/Footer/Footer';
import SupportPage from './pages/support.page';
import { ClerkProvider } from '@clerk/clerk-react'
import ProtectedLayout from './layouts/protected.layout';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
    appearance={{ layout: { unsafe_disableDevelopmentModeWarnings: true } }}
    >
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element = {<RootLayout />}>  
            <Route path='/shop'>
                {/*<Route path=":category" element={<ShopPage/>} />*/}
                <Route path="cart" element={<CartPage/>} />
              </Route>
              <Route element = {<ProtectedLayout />}>
                <Route path="/shop/cart/checkout" element={<CheckoutPage/>} />
              </Route>
            </Route>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop/paymentsl" element ={<PaymentSuccess/>} />
           
          <Route path='/sign-in' element={<SignInPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>} /> 
          <Route path='/shop/about' element= {<AboutPage/>} />
          <Route path='/shop/support' element= {<SupportPage/>} />
          <Route path='/shop/contact' element = {<Footer />} />
          {/*<Route path='/shop/promo' element= {<Navigation/>} />*/}
        </Routes>
      </BrowserRouter>
    </Provider>
    </ClerkProvider>
  </StrictMode>
)