import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AdminProducts from './pages/Adminproducts';
import ProductForm from './pages/Addproduct';
import SecurityPrivacyPage from './pages/Privacy';
import TermsAndConditions from './pages/Terms&Condition';
import FAQ from './pages/Faq';
import AdminDashboard from './pages/Admin';
import EditProductForm from './pages/Editproduct';
import BillingDetails from './pages/bill';
import PaymentOptions from './pages/PaymentOption';
import AdminLogin from './pages/AdminLogin';
import UserListPage from './pages/UserList';


import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="/adminproduct" element={<AdminProducts />} />
        <Route path="/addproduct" element={<ProductForm />} />
        <Route path="/security" element={<SecurityPrivacyPage />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/edit/:id" element={<EditProductForm />} />
        <Route path="/bill" element={<BillingDetails />} />
        <Route path="/pay" element={<PaymentOptions />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/userlist" element={<UserListPage />} />
        
      </Routes>
    </Provider>
  </BrowserRouter>
);