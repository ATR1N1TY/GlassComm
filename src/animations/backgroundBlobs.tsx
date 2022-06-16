import React, { useState } from "react";

const BackgroundBlobs = (props: { bgColors: string }) => {
  const { bgColors } = props;

  const [style, setStyle] = useState<string>(
    `slow fixed bg-orange-200 dark:bg-blue-900  rounded-full  w-32 h-32`
  );

  return (
    <>
      <div className="blob blobOne slow fixed bg-orange-200 dark:bg-blue-900  rounded-full  w-32 h-32 delay1000 hidden sm:block top-1/2 blur-2xl"></div>
      <div className="blob blobTwo slow fixed bg-orange-200 dark:bg-blue-900  rounded-full  w-32 h-32 delay900 bottom-0 right-0 blur-3xl"></div>
      <div className="blob blobThree slow fixed bg-orange-200 dark:bg-blue-900  rounded-full  w-32 h-32 delay1300 hidden sm:block bottom-1/2 left-1/2 -translate-x-3/4 -translate-y-3/4 blur-3xl"></div>
      <div className="blob blobFour slow fixed bg-orange-200 dark:bg-blue-900  rounded-full  w-32 h-32 delay1500 bottom-0 left-1/3 top-1/2 blur-2xl"></div>
    </>
  );
};

export default BackgroundBlobs;
