import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/Home/HomePage'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './landing_page/signup/Signup'
import AboutPage from './landing_page/about/AboutPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import ProductPage from './landing_page/products/ProductPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    
<Route path="/" element={<HomePage/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/about" element={<AboutPage/>}/>
<Route path="/pricing" element={<PricingPage/>}/>
<Route path="/support" element={<SupportPage/>}/>
<Route path="/product" element={<ProductPage/>}/>
<Route path="/*" element={<NotFound/>}/>

  </Routes>
  <Footer></Footer>
  </BrowserRouter>
);


