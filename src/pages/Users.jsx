import React, { useState } from "react";
import DataTable from "../components/DataTable";

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Admin",
      email: "admin@crm.com",
      role: "Admin",
      status: "Active",
      joined: "Jan 15, 2025",
    },
    {
      id: 2,
      name: "Sarah Manager",
      email: "manager@crm.com",
      role: "Manager",
      status: "Active",
      joined: "Feb 01, 2025",
    },
    {
      id: 3,
      name: "Mike Staff",
      email: "staff@crm.com",
      role: "Staff",
      status: "Active",
      joined: "Mar 10, 2025",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Staff",
    status: "Active",
    joined: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  });

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      role: "Staff",
      status: "Active",
      joined: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      joined: user.joined,
    });
    setShowModal(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    if (editingUser) {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }

    setShowModal(false);
    setEditingUser(null);
  };

  const getRoleBadgeClass = (role) => {
    if (role === "Admin") return "badge-success";
    if (role === "Manager") return "badge-pending";
    return "";
  };

  // Define table columns
  const columns = [
    {
      key: "name",
      label: "Name",
      sortable: true,
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
      render: (user) => (
        <span className={`badge ${getRoleBadgeClass(user.role)}`}>
          {user.role}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (user) => (
        <span
          className={`badge ${user.status === "Active" ? "badge-success" : ""}`}
        >
          {user.status}
        </span>
      ),
    },
    {
      key: "joined",
      label: "Joined",
      sortable: true,
    },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      render: (user) => (
        <>
          <button className="btn-edit" onClick={() => handleEditUser(user)}>
            Edit
          </button>
          <button
            className="btn-delete"
            onClick={() => handleDeleteUser(user.id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="page">
      <h1 className="page-title">User Management</h1>

      <div className="table-card">
        <div className="table-header">
          <h3 className="table-title">Users</h3>
          <button className="btn-primary" onClick={handleAddUser}>
            Add User
          </button>
        </div>
        <DataTable
          data={users}
          columns={columns}
          searchPlaceholder="Search users by name, email, role..."
          itemsPerPageOptions={[5, 10, 25]}
          defaultItemsPerPage={10}
        />
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {editingUser ? "Edit User" : "Add New User"}
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              >
                <option value="Staff">Staff</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                }}
              >
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  backgroundColor: "white",
                }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={handleSubmit}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                {editingUser ? "Update User" : "Add User"}
              </button>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingUser(null);
                }}
                style={{
                  flex: 1,
                  padding: "8px 16px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background-color: #f5f7fa;
        }
        .page {
          padding: 40px;
          max-width: 1600px;
          margin: 0 auto;
          background-color: #f5f7fa;
          min-height: 100vh;
        }
        .page-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 32px;
          color: #1a202c;
        }
        .table-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        .table-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 32px;
          border-bottom: 1px solid #e2e8f0;
        }
        .table-title {
          font-size: 24px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
        }
        .btn-primary {
          background-color: #3b82f6;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #2563eb;
        }
        .badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 600;
          background-color: #e2e8f0;
          color: #475569;
        }
        .badge-success {
          background-color: #d1fae5;
          color: #059669;
        }
        .badge-pending {
          background-color: #dbeafe;
          color: #3b82f6;
        }
        .btn-edit {
          background-color: #3b82f6;
          color: white;
          padding: 10px 18px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          margin-right: 8px;
          transition: background-color 0.2s;
        }
        .btn-edit:hover {
          background-color: #2563eb;
        }
        .btn-delete {
          background-color: #f1f5f9;
          color: #ef4444;
          padding: 10px 18px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .btn-delete:hover {
          background-color: #fee2e2;
        }
      `}</style>
    </div>
  );
}

export default Users;
