import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Faq from "./pages/Faq/Index";
import Application from "./pages/Application/Index";
import ApplicationDetail from "./pages/ApplicationDetail/Index";
import Category from "./pages/Category/Index";
import Product from "./pages/Product/Index";
import ProductDetail from "./pages/ProductDetail/Index";
import Career from "./pages/Career/Index";
import CareerDetail from "./pages/CareerDetail/Index";
import Blog from "./pages/Blog/Index";
import BlogDetail from "./pages/BlogDetail/Index";
import BlogFull from "./pages/BlogFull/Index";
import Search from "./pages/Search/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function RouteConfig() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/product/:slug/:product" element={<ProductDetail />} />
            <Route path="/applications" element={<Application />} />
            <Route path="/applications/:slug" element={<ApplicationDetail />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/careers/:slug" element={<CareerDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-full/:name/:slug" element={<BlogFull />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/search/:slug" element={<Search />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default RouteConfig;
