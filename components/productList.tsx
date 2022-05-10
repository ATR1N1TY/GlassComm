import React, { useContext, useEffect } from "react";
import ProductCard from "./productCard";
import { globalContext, product } from "../context/context";

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

  // console.log(rate);

  console.log(products);

  const filterProducts = () => {
    let filteredProducts = products;

    // როგორ დავაბრუნოთ აიტემები ქვიერის მიხედვით
    // პროდუქტის ლისტს უნდა გადავატაროთ filter ფუნქცია
    // და დავაბრუნოთ ისეთი

    if (search_query) {
      filteredProducts = filteredProducts.filter((product: product) =>
        product.name.toLowerCase().includes(search_query)
      );
    }

    if (min_price && max_price) {
      filteredProducts = filteredProducts.filter(
        (product: product) =>
          Number(product.price) > min_price && Number(product.price) < max_price
      );
    }

    if (by_order) {
      filteredProducts.sort((prev, curr) =>
        by_order === "ascending"
          ? prev.price - curr.price
          : curr.price - prev.price
      );
    }

    if (!include_out_of_stock) {
      filteredProducts = filteredProducts.filter(
        (product: product) => product.inStock > 0
      );
    }

    if (include_fast_delivery_only) {
      filteredProducts = filteredProducts.filter(
        (product: product) => product.fastDelivery
      );
    }

    if (by_ratings) {
      filteredProducts = filteredProducts.filter(
        (product: product) => product.ratings >= by_ratings
      );
    }

    return filteredProducts;
  };

  //ახლა მე მინდა filteredProducts მასივის თითოეულ ობჯექტში არსებული ფასი გავამრავლო rate-ზე და დავაბრუნო ეს

  // useEffect(() => {
  //   const prods = filterProducts();
  //   console.log(prods);
  // }, [
  //   search_query,
  //   min_price,
  //   max_price,
  //   by_order,
  //   include_out_of_stock,
  //   include_fast_delivery_only,
  //   by_ratings,
  // ]);

  return (
    <div className="productList inline-grid gap-8 grid-cols-5 grid-rows-4 min-h-screen ">
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
