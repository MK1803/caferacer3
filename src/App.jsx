import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import './assets/css/style.css'
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./views/Home";
import Products from "./views/Products";
import Basket from "./views/Basket";
import Gallery from "./views/Gallery"
import "@fancyapps/ui/dist/fancybox.css";
import Footer from "./components/Footer";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("http://localhost:7000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: "ALL", payload: data})
      });
  }, []);
  const [burgerMenu, setBurger] = useState(false)
  const closeDrop = () => {
    setBurger(false)
  }
  return (
    <div onClick={() => closeDrop()}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
