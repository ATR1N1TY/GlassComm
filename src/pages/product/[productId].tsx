import React, { useContext, useEffect, useState } from "react";
import { globalContext } from "../../context/context";
import { Product } from "../../types/types";
import Navbar from "../../components/navbar/navbar";
import Details from "../../components/product/details";
import Gallery from "../../components/product/gallery";
import { useRouter } from "next/router";
import { NextPage } from "next";
import HamburgerMenu from "../../components/hamburgerMenu/hamburgerMenu";

const ProductPage: NextPage = () => {
  const [prod, setProd] = useState<Product>();
  const router = useRouter();
  const identifier = router.query.productId;

  const {
    globalState: { products, cart },
    globalDispatch,
    currencyData: { to },
  } = useContext(globalContext);

  useEffect(() => {
    if (!router.isReady) return;
    const pr = products.find((product: Product) => product.id === identifier);
    setProd(pr);
  }, [router.isReady, identifier, prod, products]);

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <section className="productPage lg:h-screen  bg-gradient-to-tr from-red-300 to-red-700 dark:from-zinc-900 dark:to-slate-900 ">
      <Navbar />
      <HamburgerMenu />
      <div className="flex flex-col justify-center h-5/6 ">
        <section className="product flex items-center md:justify-center mt-8 flex-col lg:flex-row">
          <Gallery productImages={prod.images} />
          <Details
            product={prod}
            cart={cart}
            dispatch={globalDispatch}
            currency={to}
          />
        </section>
      </div>
    </section>
  );
};

export default ProductPage;
