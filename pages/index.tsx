import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import ProductList from "../components/productList";

const Home = () => {
  return (
    <div className="app bg-gradient-to-tr from-red-300 to-red-700 h-screen">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
