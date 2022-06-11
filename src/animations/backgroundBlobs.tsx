import React, { useState } from "react";

const BackgroundBlobs = (props: { bgColors: string }) => {
  const { bgColors } = props;

  const [style, setStyle] = useState(
    `slow fixed ${bgColors} rounded-full  sm:w-96 sm:h-96`
  );

  return (
    <>
      <div
        className={`blob blobOne ${style} delay1000 hidden sm:block top-1/2 blur-2xl`}
      ></div>
      <div
        className={`blob blobTwo ${style} delay900 bottom-0 right-0 blur-3xl`}
      ></div>
      <div
        className={`blob blobThree ${style} delay1300 hidden sm:block bottom-1/2 left-1/2 -translate-x-3/4 -translate-y-3/4 blur-3xl`}
      ></div>
      <div
        className={`blob blobFour ${style} delay1500 bottom-0 left-1/3 top-1/2 blur-2xl`}
      ></div>
    </>
  );
};

export default BackgroundBlobs;
