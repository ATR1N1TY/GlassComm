import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div className="app bg-gradient-to-tr from-purple-500 to-pink-500 h-screen">
      <Navbar />
    </div>
  );
};

export default Home;
