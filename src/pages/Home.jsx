import { Link } from "react-router-dom";
import "../styles/Home.module.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to TakeALot Dashboard</h1>
        <p>Manage your e-commerce products efficiently</p>
        <div className="home-actions">
          <Link to="/products" className="home-link">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
