import React from "react";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <div className="productList flex flex-wrap m-8 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
