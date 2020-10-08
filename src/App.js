import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import Offer from "./components/Offer";
import Testimonial from "./components/Testimonial";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <Testimonial />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
