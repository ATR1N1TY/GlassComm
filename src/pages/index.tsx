import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import ProductList from "../components/productList";
import Filter from "../components/filter";

const Home = () => {
  return (
    <div className="app bg-gradient-to-tr from-red-300 to-red-700">
      <Navbar />
      <div className="filterContainer w-full flex align-middle justify-center">
        <Filter />
      </div>
      <div className="wrapper flex items-center justify-center py-8">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
