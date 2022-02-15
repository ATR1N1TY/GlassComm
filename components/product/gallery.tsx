import React, { useState } from "react";
import Image from "next/image";

import image from "../../public/imagesForTesting/image.jpg";
import image1 from "../../public/imagesForTesting/image1.jpg";
import image2 from "../../public/imagesForTesting/image2.jpg";
import image3 from "../../public/imagesForTesting/image3.jpg";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <section className="gallery  mr-24 w-1/3">
      <div className="currentImage">
        <Image src={image} className="GenImage rounded-2xl" alt="rame" />
        <div className="options flex items-center justify-between mt-8">
          <Image
            className="rounded-xl"
            height={"150px"}
            width={"150px"}
            src={image}
            alt="n1"
          />
          <Image
            className="rounded-xl"
            height={"150px"}
            width={"150px"}
            src={image1}
            alt="n1"
          />
          <Image
            className="rounded-xl"
            height={"150px"}
            width={"150px"}
            src={image2}
            alt="n1"
          />
          <Image
            className="rounded-xl"
            height={"150px"}
            width={"150px"}
            src={image3}
            alt="n1"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
