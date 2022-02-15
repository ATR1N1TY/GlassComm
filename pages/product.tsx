import React from "react";
import Navbar from "../components/navbar";
import Details from "../components/product/details";
import Gallery from "../components/product/gallery";

const productPage = () => {
  return (
    <section className="productPage w-screen  h-screen">
      <Navbar />
      <section className="product flex items-center justify-center">
        <Gallery />
        <Details />
      </section>
    </section>
  );
};

export default productPage;
