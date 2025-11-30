import { useState } from "react";
import "../styles/main.css";

const Reports = () => {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [reportType, setReportType] = useState("Sales Overview");

  const reports = [
    {
      id: "sales-overview",
      title: "Sales Overview",
      description: "General sales performance metrics",
      icon: "📊",
      color: "blue",
      status: "Selected",
      badge: "Coming Soon",
      badgeColor: "orange",
    },
    {
      id: "product-performance",
      title: "Product Performance",
      description: "Top selling products and inventory analysis",
      icon: "📦",
      color: "green",
      status: "Click to View",
      badge: "Available",
      badgeColor: "green",
    },
    {
      id: "sales-trends",
      title: "Sales Trends",
      description: "Historical sales trends and patterns",
      icon: "📈",
      color: "purple",
      status: "Click to View",
      badge: "Coming Soon",
      badgeColor: "orange",
    },
    {
      id: "profitability",
      title: "Profitability Analysis",
      description: "Profit margins and financial performance",
      icon: "💲",
      color: "yellow",
      status: "Click to View",
      badge: "Coming Soon",
      badgeColor: "orange",
    },
    {
      id: "inventory",
      title: "Inventory Report",
      description: "Stock levels and reorder recommendations",
      icon: "🎯",
      color: "red",
      status: "Click to View",
      badge: "Coming Soon",
      badgeColor: "orange",
    },
    {
      id: "returns",
      title: "Returns Analysis",
      description: "Product returns and refund patterns",
      icon: "↩️",
      color: "orange",
      status: "Click to View",
      badge: "Coming Soon",
      badgeColor: "orange",
    },
  ];

  return (
    <div className="page reports-page">
      <div className="page-header-custom">
        <div className="header-left">
          <h1 className="page-title-custom">Takealot Reports</h1>
          <p className="page-subtitle-custom">
            Comprehensive analytics and insights for your Takealot integration
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-generate">↻ Generate Report</button>
          <button className="btn-export">📥 Export</button>
        </div>
      </div>

      <div className="config-card">
        <h3 className="section-title">Report Configuration</h3>
        <div className="config-row">
          <div className="form-group">
            <label>Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="form-select"
            >
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="form-group">
            <label>Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="form-select"
            >
              <option>Sales Overview</option>
              <option>Product Performance</option>
            </select>
          </div>
        </div>
        <div className="config-actions">
          <button className="btn-view-report">📊 View Report</button>
        </div>
      </div>

      <div className="reports-section">
        <h3 className="section-title">Available Reports</h3>
        <p className="section-subtitle">
          Click on any report card to select and view it immediately
        </p>

        <div className="reports-grid">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`report-card ${
                report.id === "sales-overview" ? "selected" : ""
              }`}
            >
              <div className="report-header">
                <div className={`report-icon icon-${report.color}`}>
                  {report.icon}
                </div>
                <h4 className="report-title">{report.title}</h4>
              </div>
              <p className="report-desc">{report.description}</p>
              <div className="report-footer">
                <span
                  className={`status-text ${
                    report.status === "Selected" ? "selected-text" : ""
                  }`}
                >
                  {report.status}
                </span>
                {report.badge && (
                  <span className={`report-badge badge-${report.badgeColor}`}>
                    {report.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reports-page {
          padding: 1.5rem 2rem;
        }

        .page-header-custom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .page-title-custom {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .page-subtitle-custom {
          color: #6b7280;
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .btn-generate {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .btn-export {
          background-color: #4ade80;
          color: #065f46;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .config-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: #6b7280;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          margin-top: -0.5rem;
        }

        .config-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
        }

        .form-select {
          padding: 0.6rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 0.95rem;
          color: #111827;
          outline: none;
        }

        .form-select:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .config-actions {
          display: flex;
          justify-content: center;
        }

        .btn-view-report {
          background-color: #6366f1;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .report-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
        }

        .report-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .report-card.selected {
          border: 2px solid #3b82f6;
          background-color: #eff6ff;
        }

        .report-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.75rem;
        }

        .report-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .icon-blue { background-color: #dbeafe; color: #2563eb; }
        .icon-green { background-color: #dcfce7; color: #166534; }
        .icon-purple { background-color: #f3e8ff; color: #7e22ce; }
        .icon-yellow { background-color: #fef9c3; color: #a16207; }
        .icon-red { background-color: #fee2e2; color: #b91c1c; }
        .icon-orange { background-color: #ffedd5; color: #c2410c; }

        .report-title {
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
        }

        .report-desc {
          font-size: 0.85rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .report-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
        }

        .status-text {
          color: #6b7280;
          font-weight: 500;
        }

        .selected-text {
          color: #2563eb;
          font-weight: 700;
        }

        .report-badge {
          padding: 2px 8px;
          border-radius: 9999px;
          font-weight: 600;
        }

        .badge-green { background-color: #dcfce7; color: #166534; }
        .badge-orange { background-color: #ffedd5; color: #c2410c; }
      `}</style>
    </div>
  );
};

export default Reports;
