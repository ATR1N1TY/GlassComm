import React, { useContext, useEffect } from "react";
import ProductCard from "./productCard";
import { globalContext } from "../context/context";
import { Product } from "../types/types";

const ProductList = () => {
  const {
    globalState: { products, cart },
    globalDispatch,
    filterState: {
      search_query,
      min_price,
      max_price,
      by_order,
      include_out_of_stock,
      include_fast_delivery_only,
      by_ratings,
    },
  } = useContext(globalContext);

  const filterProducts = () => {
    let filteredProducts = products;

    if (search_query) {
      filteredProducts = filteredProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(search_query)
      );
    }

    if (min_price && max_price) {
      filteredProducts = filteredProducts.filter(
        (product: Product) =>
          Number(product.price) > min_price && Number(product.price) < max_price
      );
    }

    if (by_order) {
      filteredProducts.sort((prev: any, curr: any) =>
        by_order === "ascending"
          ? prev.price - curr.price
          : curr.price - prev.price
      );
    }

    if (!include_out_of_stock) {
      filteredProducts = filteredProducts.filter(
        (product: Product) => product.inStock > 0
      );
    }

    if (include_fast_delivery_only) {
      filteredProducts = filteredProducts.filter(
        (product: Product) => product.fastDelivery
      );
    }

    if (by_ratings) {
      filteredProducts = filteredProducts.filter(
        (product: Product) => product.ratings >= by_ratings
      );
    }

    return filteredProducts;
  };

  return (
    <div className="productList inline-grid gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 grid-rows-auto min-h-screen ">
      {/* <ProductCard /> */}
      {filterProducts().map((product: any) => {
        return (
          <ProductCard
            product={product}
            cart={cart}
            key={product.id}
            dispatch={globalDispatch}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
