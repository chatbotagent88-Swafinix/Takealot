import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="page">
      <div className="unauthorized-container">
        <h1 className="unauthorized-title">403</h1>
        <h2 className="unauthorized-subtitle">Unauthorized Access</h2>
        <p className="unauthorized-text">
          You do not have permission to access this page.
        </p>
        <Link to="/dashboard" className="btn-primary">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;