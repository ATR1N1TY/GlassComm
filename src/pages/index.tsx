import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import ProductList from "../components/productList";
import Filter from "../components/filter";
import { globalContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import BackgroundBlobs from "../animations/backgroundBlobs";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";

//This is were all begins, this is main page. here we are rendering Navbar, Filter & ProductList
const Home = () => {
  const { filterOn, setFilterOn, showMenu } = useContext(globalContext);
  const screenWidth = useScreenWidth();
  const ref = "from-red-300 to-red-600";
  const [style, setStyle] = useState(
    "slow fixed bg-orange-300 dark:bg-blue-900 rounded-full  sm:w-96 sm:h-96"
  );

  useEffect(() => {
    if (screenWidth && screenWidth < 1024) {
      setFilterOn(false);
    } else {
      setFilterOn(true);
    }
  }, [screenWidth, setFilterOn]);

  useEffect(() => {
    setFilterOn(window.innerWidth < 1024 ? false : true);
  }, [setFilterOn]);

  return (
    <div
      className={`app bg-gradient-to-tr from-red-200 to-red-500 dark:from-zinc-900 dark:to-slate-900 relative ${
        showMenu ? " overflow-hidden " : ""
      }`}
    >
      <BackgroundBlobs bgColors="bg-orange-200 dark:bg-blue-900" />

      {/* <>
        <div
          className={`blobOne ${style} delay1000 hidden sm:block top-1/2 blur-2xl`}
        ></div>
        <div
          className={`blobTwo ${style} delay900 bottom-0 right-0 blur-3xl`}
        ></div>
        <div
          className={`blobThree ${style} delay1300 hidden sm:block bottom-1/2 left-1/2 -translate-x-3/4 -translate-y-3/4 blur-3xl`}
        ></div>
        <div
          className={`blobFour ${style} delay1500 bottom-0 left-1/3 top-1/2 blur-2xl`}
        ></div>
      </> */}

      <Navbar />

      <HamburgerMenu />

      <div className="wrapper w-full flex justify-around flex-col items-center lg:items-start xl:items-center lg:flex-row xl:flex-col 2xl:flex-col ">
        <aside
          className={`filterContainer ${
            filterOn ? "block" : "hidden"
          }  flex w-1/4 xl:w-auto h-[600px] xl:h-auto xl:align-middle justify-center lg: xl:justify-center`}
        >
          <Filter />
        </aside>

        <main className="mainProducts flex items-center justify-center py-8">
          <ProductList />
        </main>
      </div>
    </div>
  );
};

export default Home;
