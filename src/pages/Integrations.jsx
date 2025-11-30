import "../styles/main.css";

const Integrations = () => {
    return (
        <div className="page integrations-page">
            <div className="page-header-custom">
                <h1 className="page-title-custom">Integration Management</h1>
            </div>

            <div className="integration-hub-card">
                <div className="hub-header">
                    <h2 className="hub-title">Integration Hub</h2>
                    <p className="hub-subtitle">
                        Connect your business to multiple platforms and streamline
                        operations
                    </p>
                </div>

                <div className="hub-status-bar">
                    <div className="status-indicator">
                        <span className="dot green"></span>
                        <span className="status-text">
                            <strong>1 Active Integration</strong>
                            <br />
                            <span className="last-updated">Last updated: 12:57:13</span>
                        </span>
                    </div>
                    <div className="hub-actions">
                        <button className="btn-manual-refresh">↻ Manual Refresh</button>
                        <button className="btn-add-integration">+ Add Integration</button>
                    </div>
                </div>

                <div className="integration-list">
                    <div className="list-header">
                        <div className="col-details">Integration Details</div>
                        <div className="col-type">Type</div>
                        <div className="col-status">Status</div>
                        <div className="col-access">Access</div>
                        <div className="col-actions">Actions</div>
                    </div>

                    <div className="integration-item">
                        <div className="col-details">
                            <div className="integration-icon">⚙️</div>
                            <div className="integration-info">
                                <h4 className="integration-name">LTech</h4>
                                <p className="integration-id">ID: integration_1762972312137</p>
                            </div>
                        </div>
                        <div className="col-type">
                            <span className="badge-type">Takealot</span>
                        </div>
                        <div className="col-status">
                            <span className="badge-status active">• Active</span>
                        </div>
                        <div className="col-access">
                            <span className="access-info">👤 Admin</span>
                        </div>
                        <div className="col-actions">
                            <button className="btn-open">Open</button>
                            <button className="btn-icon-action">✏️</button>
                            <button className="btn-icon-action delete">🗑️</button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .integrations-page {
          padding: 1.5rem 2rem;
        }

        .page-header-custom {
          margin-bottom: 2rem;
        }

        .page-title-custom {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }

        .integration-hub-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          text-align: center;
        }

        .hub-header {
          margin-bottom: 2rem;
        }

        .hub-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #7c3aed; /* Purple color from image */
          margin-bottom: 0.5rem;
        }

        .hub-subtitle {
          color: #6b7280;
        }

        .hub-status-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f9fafb;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.green { background: #10b981; }

        .status-text {
          font-size: 0.9rem;
          color: #374151;
        }

        .last-updated {
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 400;
        }

        .hub-actions {
          display: flex;
          gap: 10px;
        }

        .btn-manual-refresh {
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #dbeafe;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-add-integration {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .integration-list {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }

        .list-header {
          display: flex;
          background: #f9fafb;
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #6b7280;
          border-bottom: 1px solid #e5e7eb;
        }

        .integration-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          background: white;
        }

        .col-details { flex: 2; display: flex; align-items: center; gap: 12px; text-align: left; }
        .col-type { flex: 1; text-align: left; }
        .col-status { flex: 1; text-align: left; }
        .col-access { flex: 1; text-align: left; }
        .col-actions { flex: 1; display: flex; justify-content: flex-end; gap: 8px; }

        .integration-icon {
          width: 40px;
          height: 40px;
          background: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #2563eb;
        }

        .integration-name {
          font-weight: 700;
          color: #111827;
          margin-bottom: 2px;
        }

        .integration-id {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .badge-type {
          background: #e0e7ff;
          color: #4338ca;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .badge-status {
          background: #dcfce7;
          color: #166534;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .access-info {
          color: #4b5563;
          font-size: 0.9rem;
        }

        .btn-open {
          background: #2563eb;
          color: white;
          border: none;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-icon-action {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          opacity: 0.6;
        }

        .btn-icon-action:hover {
          opacity: 1;
        }

        .btn-icon-action.delete {
          color: #ef4444;
        }
      `}</style>
        </div>
    );
};

export default Integrations;
