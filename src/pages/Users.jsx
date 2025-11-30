import { useState } from "react";
import "../styles/main.css";
import DataTable from "../components/DataTable";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "kabo",
      email: "kabo@ltech.com",
      role: "takealot user",
      status: "Admin",
      integrations: 1,
      joined: "2025/11/12",
      initials: "K",
      color: "blue",
    },
    {
      id: 2,
      name: "Thesales",
      email: "junaidqasim@yahoo.com",
      role: "admin",
      status: "Admin",
      integrations: 1,
      joined: "2025/11/12",
      initials: "T",
      color: "purple",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      key: "user",
      label: "USER",
      sortable: true,
      width: "250px",
      render: (row) => (
        <div className="user-cell">
          <div className={`user-avatar avatar-${row.color}`}>{row.initials}</div>
          <div className="user-info">
            <div className="user-name">{row.name}</div>
            <div className="user-email">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      label: "ROLE",
      sortable: true,
      width: "150px",
      render: (row) => (
        <span
          className={`role-badge ${row.role === "admin" ? "role-admin" : "role-user"
            }`}
        >
          {row.role}
        </span>
      ),
    },
    {
      key: "status",
      label: "STATUS",
      sortable: true,
      width: "150px",
      render: (row) => (
        <div className="status-badges">
          <span className="status-tag email">Email</span>
          <span className="status-tag admin">{row.status}</span>
        </div>
      ),
    },
    {
      key: "integrations",
      label: "INTEGRATIONS",
      sortable: true,
      width: "120px",
      render: (row) => <span className="integration-count">{row.integrations}</span>,
    },
    {
      key: "joined",
      label: "JOINED",
      sortable: true,
      width: "120px",
      render: (row) => <span className="joined-date">{row.joined}</span>,
    },
    {
      key: "actions",
      label: "ACTIONS",
      sortable: false,
      width: "120px",
      render: () => (
        <div className="action-icons">
          <button className="icon-btn view">👁️</button>
          <button className="icon-btn edit">✏️</button>
          <button className="icon-btn settings">⚙️</button>
          <button className="icon-btn delete">🗑️</button>
        </div>
      ),
    },
  ];

  return (
    <div className="page users-page">
      <div className="page-header-custom">
        <div className="header-left">
          <h1 className="page-title-custom">User Management</h1>
          <p className="page-subtitle-custom">
            Manage your profile and sub-users.
          </p>
        </div>
        <button className="btn-add-user" onClick={() => setShowModal(true)}>
          + Add New User
        </button>
      </div>

      <div className="table-card">
        <DataTable
          data={users}
          columns={columns}
          searchPlaceholder="Search by name, email, or role"
          itemsPerPageOptions={[10, 25, 50]}
          defaultItemsPerPage={10}
        />
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New User</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>User creation form placeholder...</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .users-page {
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
          margin-bottom: 0.25rem;
        }

        .page-subtitle-custom {
          color: #6b7280;
          font-size: 0.9rem;
        }

        .btn-add-user {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .table-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 1rem;
        }

        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .avatar-blue { background-color: #3b82f6; }
        .avatar-purple { background-color: #7c3aed; }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          color: #111827;
          font-size: 0.9rem;
        }

        .user-email {
          font-size: 0.8rem;
          color: #6b7280;
        }

        .role-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .role-user {
          background: #ffedd5;
          color: #c2410c;
        }

        .role-admin {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-badges {
          display: flex;
          gap: 6px;
        }

        .status-tag {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-tag.email {
          background: #dcfce7;
          color: #166534;
        }

        .status-tag.admin {
          background: #ffedd5;
          color: #c2410c;
        }

        .integration-count {
          font-weight: 600;
          color: #374151;
        }

        .joined-date {
          font-size: 0.9rem;
          color: #4b5563;
        }

        .action-icons {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          opacity: 0.6;
          padding: 4px;
        }

        .icon-btn:hover {
          opacity: 1;
          background: #f3f4f6;
          border-radius: 4px;
        }

        .icon-btn.delete {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
}

export default Users;
