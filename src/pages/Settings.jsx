import { useState } from "react";
import "../styles/main.css";

const Settings = () => {
  const [apiStatus, setApiStatus] = useState("Ready");
  const [catalogStatus, setCatalogStatus] = useState("0 products 0 pages");
  const [salesStatus, setSalesStatus] = useState("0 sales 0 pages");

  const handleTestApi = () => {
    setApiStatus("Testing...");
    setTimeout(() => setApiStatus("Ready"), 1500);
  };

  const handleCheckCatalog = () => {
    setCatalogStatus("Checking...");
    setTimeout(() => setCatalogStatus("0 products 0 pages"), 1500);
  };

  const handleCheckSales = () => {
    setSalesStatus("Checking...");
    setTimeout(() => setSalesStatus("0 sales 0 pages"), 1500);
  };

  return (
    <div className="page settings-page">
      <div className="page-header-custom">
        <div className="header-left">
          <h1 className="page-title-custom">Takealot Settings</h1>
          <p className="page-subtitle-custom">Takealot Settings</p>
        </div>
      </div>

      <div className="settings-container">
        {/* Header Card */}
        <div className="settings-card header-card">
          <div className="icon-box green-icon">T</div>
          <div className="card-content">
            <h3 className="card-title">Takealot Settings</h3>
            <p className="card-desc">
              Configure integration & data management preferences
            </p>
          </div>
        </div>

        {/* API & Data Checks */}
        <div className="settings-card">
          <div className="card-header">
            <h3 className="section-title">API & Data Checks</h3>
            <p className="section-desc">
              Test your API connection using official Takealot API endpoints
            </p>
          </div>

          <div className="check-row">
            <div className="check-icon blue-bg">⚡</div>
            <div className="check-info">
              <h4 className="check-title">API Connection</h4>
              <p className="check-detail">Base URL: seller-api.takealot.com</p>
              <div className="check-meta">
                <span>Last: 1:30:55 PM</span>
                <span className="status-badge ready">🟦 {apiStatus}</span>
              </div>
            </div>
            <button className="btn-test" onClick={handleTestApi}>
              Test
            </button>
          </div>

          <div className="check-row">
            <div className="check-icon purple-bg">📦</div>
            <div className="check-info">
              <h4 className="check-title">Product Catalog</h4>
              <p className="check-detail">GET /v2/offers (Rate limit: 200/min)</p>
              <div className="check-meta">
                <span>Last: 1:18:55 PM</span>
                <span className="purple-text">{catalogStatus}</span>
              </div>
            </div>
            <button className="btn-check purple" onClick={handleCheckCatalog}>
              Check
            </button>
          </div>

          <div className="check-row">
            <div className="check-icon green-bg">📈</div>
            <div className="check-info">
              <h4 className="check-title">Sales Overview</h4>
              <p className="check-detail">
                GET /v2/sales (Max: 180 days per query)
              </p>
              <div className="check-meta">
                <span>Last: 1:10:55 PM</span>
                <span className="green-text">{salesStatus}</span>
              </div>
            </div>
            <button className="btn-check green" onClick={handleCheckSales}>
              Check
            </button>
          </div>
        </div>

        {/* Data Cleanup */}
        <div className="settings-card">
          <div className="card-header flex-header">
            <div className="header-content">
              <div className="icon-box red-icon">↻</div>
              <div>
                <h3 className="section-title">Data Cleanup</h3>
                <p className="section-desc">
                  Fix duplicates and manage data integrity
                </p>
              </div>
            </div>
            <span className="badge-advanced">Advanced Tools</span>
          </div>

          <div className="cleanup-grid">
            <div className="cleanup-col">
              <div className="cleanup-header">
                <span className="blue-icon">📦</span> Fix Products
              </div>
              <div className="cleanup-box blue-box">
                <p>Remove duplicate products by TSIN</p>
                <p className="sub-text">
                  Identifies and removes products with duplicate TSIN IDs
                </p>
              </div>
              <button className="btn-fix blue-btn">Fix Duplicates</button>
            </div>

            <div className="cleanup-col">
              <div className="cleanup-header">
                <span className="green-icon">🛒</span> Fix Sales
              </div>
              <div className="cleanup-box green-box">
                <p>Remove duplicate sales by Order ID</p>
                <p className="sub-text">
                  Identifies and removes sales with duplicate Order IDs
                </p>
              </div>
              <button className="btn-fix green-btn">Fix Duplicates</button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .settings-page {
          padding: 1.5rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .page-header-custom {
          margin-bottom: 2rem;
        }

        .page-title-custom {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }

        .page-subtitle-custom {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .settings-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .settings-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .header-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }

        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .green-icon { background: #dcfce7; color: #166534; }
        .red-icon { background: #fee2e2; color: #b91c1c; font-size: 1.5rem; }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
        }

        .card-desc {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .flex-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .header-content {
          display: flex;
          gap: 1rem;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
        }

        .section-desc {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .check-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .check-row:last-child {
          border-bottom: none;
        }

        .check-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .blue-bg { background: #dbeafe; color: #2563eb; }
        .purple-bg { background: #f3e8ff; color: #7e22ce; }
        .green-bg { background: #dcfce7; color: #166534; }

        .check-info {
          flex: 1;
        }

        .check-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: #111827;
        }

        .check-detail {
          font-size: 0.8rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .check-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #9ca3af;
          align-items: center;
        }

        .status-badge {
          background: #3b82f6;
          color: white;
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
        }

        .purple-text { color: #7e22ce; font-weight: 600; }
        .green-text { color: #166534; font-weight: 600; }

        .btn-test {
          background: #2563eb;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-check {
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-check.purple { background: #9333ea; }
        .btn-check.green { background: #16a34a; }

        .badge-advanced {
          background: #fee2e2;
          color: #b91c1c;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .cleanup-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .cleanup-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cleanup-header {
          font-weight: 600;
          font-size: 0.9rem;
          color: #374151;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cleanup-box {
          padding: 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        .blue-box { background: #eff6ff; border: 1px solid #dbeafe; color: #1e40af; }
        .green-box { background: #f0fdf4; border: 1px solid #dcfce7; color: #166534; }

        .sub-text {
          font-size: 0.75rem;
          margin-top: 0.25rem;
          opacity: 0.8;
        }

        .btn-fix {
          width: 100%;
          padding: 0.75rem;
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .blue-btn { background: #3b82f6; }
        .green-btn { background: #22c55e; }

        @media (max-width: 768px) {
          .cleanup-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Settings;
