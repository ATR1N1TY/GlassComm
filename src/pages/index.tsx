import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import ProductList from "../components/productList";
import Filter from "../components/filter";
import { globalContext } from "../context/context";
import { useContext, useEffect } from "react";
import { useScreenWidth } from "../hooks/useScreenWidth";
import BackgroundBlobs from "../animations/backgroundBlobs";
import HamburgerMenu from "../components/hamburgerMenu/hamburgerMenu";

//This is were all begins, this is main page. here we are rendering Navbar, Filter & ProductList
const Home = () => {
  const { filterOn, setFilterOn, showMenu } = useContext(globalContext);
  const screenWidth = useScreenWidth();

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
    <div className="app bg-gradient-to-tr from-red-200 to-red-500 dark:from-zinc-900 dark:to-slate-900 relative">
      <BackgroundBlobs bgColors="" />

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
