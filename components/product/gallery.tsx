import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { globalContext, product } from "../../context/context";
import image from "../../public/imagesForTesting/image.jpg";
import image1 from "../../public/imagesForTesting/image1.jpg";
import image2 from "../../public/imagesForTesting/image2.jpg";
import image3 from "../../public/imagesForTesting/image3.jpg";

interface pro {
  product: product;
}

const Gallery = ({ product }: pro) => {
  const [images, setImages] = useState([...Array(5)]);
  const [selectedImg, setSelectedImg] = useState("");

  useEffect(() => {
    if (!product) return;
    setImages(product.images);
  }, [product]);

  console.log(images[0]);
  // const [ident, setIdent] = useState(identifier);

  // const getProduct = () => {
  //   const product = products.filter((product: product) => {
  //     // console.log(product.id, ident);

  //     product.id === ident;
  //   });
  //   console.log(product);
  //   return product;
  // };

  // useEffect(() => {
  //   console.log(getProduct());
  // }, []);
  // console.log(product);

  // console.log(product.name);

  return (
    <section className="gallery mt-16  mr-24 w-1/3">
      <div className="currentImage flex justify-center">
        {/* <Image src={image} className="GenImage rounded-2xl" alt="rame" /> */}
        <img
          src={selectedImg ? selectedImg : images[0]}
          alt="1"
          className="GenImage rounded-2xl"
        />
        {/* {product.images[0]} */}
      </div>
      <div className="options flex items-center justify-between mt-8 gap-3">
        {images.map((image, idx) => (
          <img
            src={image}
            alt=""
            className=" h-32 w-32 rounded-xl hover:cursor-pointer"
            key={idx}
            onClick={() => setSelectedImg(image)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
