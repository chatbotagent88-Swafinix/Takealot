import { Link } from "react-router-dom";
import "../styles/main.css";

const Home = () => {
  return (
    <div className="page">
      <div className="table-card" style={{ padding: "2rem" }}>
        <h1 className="page-title">Welcome to TakeALot Dashboard</h1>
        <p className="subtle">Manage your e-commerce products efficiently</p>
        <div style={{ marginTop: "1rem" }}>
          <Link to="/products" className="btn-primary">
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
