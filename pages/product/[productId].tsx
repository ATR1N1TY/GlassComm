import React, { useContext, useEffect, useState } from "react";
import { globalContext, product } from "../../context/context";
import Navbar from "../../components/navbar";
import Details from "../../components/product/details";
import Gallery from "../../components/product/gallery";
import { useRouter } from "next/router";
import { NextPage } from "next";

// სთეითში არსებულ პროდუქტთა ჩამონათვალთა შორის, რომლის აიდი ემთხვევა ლინკის აიდის, დარენდერდეს ეს პროდუქტი

const ProductPage: NextPage = () => {
  // console.log("PRODUCT PAGE STARTED----------------------------->");

  // const [identifier, setIdentifier] = useState("");
  const [prod, setProd] = useState(false);
  const router = useRouter();
  // console.log(router);
  const identifier = router.query.productId;

  // console.log(`PROD SET TO : ${prod}`);

  const {
    globalState: { products, cart },
    globalDispatch,
  } = useContext(globalContext);

  // console.log(cart);

  useEffect(() => {
    // console.log("USEEFFECT START++++++++++++++++++++++++++++");
    if (!router.isReady) return;

    // console.log(`IDENTIFIER SET TO ${identifier}`);

    // console.log(products);

    // console.log("SEARCHING PRODUCT....");
    const pr = products.find((product: product) => product.id === identifier);
    // console.log(`PRODUCT FOUND: ${pr}`);

    //setProd doesn't set product
    setProd(pr);

    // console.log(`PROD SET TO PRODUCT, NOW PROD IS: ${prod}`);

    // console.log("USEEFFECT END++++++++++++++++++++++++++++++++++++");
  }, [router.isReady, identifier, prod, products]);

  // console.log("PRODUCT PAGE RENDERED------------------------------>");
  return (
    <section className="productPage h-screen  bg-gradient-to-tr from-red-300 to-red-700 ">
      <Navbar />
      <div className="flex flex-col justify-center h-5/6 ">
        <section className="product flex items-center justify-center mt-8">
          <Gallery product={prod} />
          <Details product={prod} cart={cart} dispatch={globalDispatch} />
        </section>
      </div>
    </section>
  );
};

export default ProductPage;
