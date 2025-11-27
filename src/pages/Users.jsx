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
    joined: new Date().toLocaleDateString(),
  });

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      role: "Staff",
      status: "Active",
      joined: new Date().toLocaleDateString(),
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
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email)
      return alert("Please fill in required fields");

    if (editingUser) {
      setUsers(
        users.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u))
      );
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }

    setShowModal(false);
    setEditingUser(null);
  };

  const getRoleBadgeClass = (role) =>
    role === "Admin"
      ? "badge-success"
      : role === "Manager"
      ? "badge-pending"
      : "";

  const columns = [
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    {
      key: "role",
      label: "Role",
      sortable: true,
      render: (u) => (
        <span className={`badge ${getRoleBadgeClass(u.role)}`}>{u.role}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (u) => (
        <span
          className={`badge ${u.status === "Active" ? "badge-success" : ""}`}
        >
          {u.status}
        </span>
      ),
    },
    { key: "joined", label: "Joined", sortable: true },
    {
      key: "actions",
      label: "Actions",
      sortable: false,
      render: (u) => (
        <>
          <button className="btn-edit" onClick={() => handleEditUser(u)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => handleDeleteUser(u.id)}>
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
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-body" style={{ padding: "1.25rem" }}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  className="form-input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  className="form-select"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option>Staff</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  className="btn-primary"
                  style={{ flex: 1 }}
                  onClick={handleSubmit}
                >
                  {editingUser ? "Update User" : "Add User"}
                </button>
                <button
                  className="btn-delete"
                  style={{ flex: 1 }}
                  onClick={() => {
                    setShowModal(false);
                    setEditingUser(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
