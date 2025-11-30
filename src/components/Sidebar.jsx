// src/components/Sidebar.jsx (REFACTORED - Categorized & Nested)

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRBAC } from "../context/RBACContext";
import RoleBadge from "./RoleBadge";

function Sidebar() {
  const { canAccess } = useRBAC();
  const location = useLocation();

  // State to manage expanded sections (default open for Takealot)
  const [expandedSections, setExpandedSections] = useState({
    takealot: true,
    administration: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <div
          className="logo-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient)" />
                <path
                  d="M8 16L14 22L24 10"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <h2 className="sidebar-title">POS System</h2>
              <p className="sidebar-subtitle">Admin</p>
            </div>
          </div>
          <RoleBadge />
        </div>
      </div>

      <nav className="sidebar-nav">
        {/* POS System Section */}
        <div className="nav-section">
          <p className="nav-section-label">POS System</p>

          {canAccess("/dashboard") && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-icon-text">🏠</span>
              <span>Dashboard</span>
            </NavLink>
          )}

          {canAccess("/pos") && (
            <NavLink
              to="/pos"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="nav-icon-text">🖥️</span>
              <span>POS</span>
            </NavLink>
          )}

          <div className="nav-link disabled">
            <span className="nav-icon-text">🛒</span>
            <span>Purchase System</span>
            <span className="chevron">›</span>
          </div>
        </div>

        {/* INTEGRATIONS Section */}
        <div className="nav-section">
          <p className="nav-section-label">INTEGRATIONS</p>

          {/* Takealot (LTech) Group */}
          <div className="nav-group">
            <div
              className={`nav-group-header ${
                expandedSections.takealot ? "expanded" : ""
              }`}
              onClick={() => toggleSection("takealot")}
            >
              <div className="group-title">
                <span className="nav-icon-text">📦</span>
                <span>Takealot (LTech)</span>
              </div>
              <span className="chevron">
                {expandedSections.takealot ? "⌄" : "›"}
              </span>
            </div>

            {expandedSections.takealot && (
              <div className="nav-group-items">
                {canAccess("/products") && (
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">🛍️</span>
                    <span>Products</span>
                  </NavLink>
                )}

                {canAccess("/products") && (
                  <NavLink
                    to="/sales"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">💰</span>
                    <span>Sales</span>
                  </NavLink>
                )}

                {canAccess("/products") && (
                  <NavLink
                    to="/auto-price"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">🏷️</span>
                    <span>Auto Price</span>
                  </NavLink>
                )}

                {canAccess("/products") && (
                  <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">📊</span>
                    <span>Reports</span>
                  </NavLink>
                )}

                <div className="nav-link disabled">
                  <span className="nav-icon-text">🧾</span>
                  <span>Recon Invoice</span>
                </div>

                {canAccess("/settings") && (
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">⚙️</span>
                    <span>Settings</span>
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ADMINISTRATION Section */}
        <div className="nav-section">
          <p className="nav-section-label">ADMINISTRATION</p>

          <div className="nav-group">
            <div
              className={`nav-group-header ${
                expandedSections.administration ? "expanded" : ""
              }`}
              onClick={() => toggleSection("administration")}
            >
              <div className="group-title">
                <span className="nav-icon-text">🛡️</span>
                <span>Administration</span>
              </div>
              <span className="chevron">
                {expandedSections.administration ? "⌄" : "›"}
              </span>
            </div>

            {expandedSections.administration && (
              <div className="nav-group-items">
                {canAccess("/users") && (
                  <NavLink
                    to="/users"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="nav-icon-text">👥</span>
                    <span>Manage Users</span>
                  </NavLink>
                )}

                <NavLink
                  to="/integrations"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <span className="nav-icon-text">🔗</span>
                  <span>Manage Integrations</span>
                </NavLink>

                <div className="nav-link disabled">
                  <span className="nav-icon-text">📱</span>
                  <span>App Settings</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-link logout">
            <span className="nav-icon-text">🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </nav>

      <style>{`
        .nav-group-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s;
          color: #d1d5db;
        }

        .nav-group-header:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .nav-group-header.expanded {
          background-color: #4f46e5; /* Active/Expanded color */
          color: white;
        }

        .group-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
        }

        .nav-group-items {
          padding-left: 1rem; /* Indent nested items */
          margin-top: 0.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.6rem 1rem;
          color: #9ca3af;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
          font-size: 0.9rem;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .nav-link.active {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 600;
        }

        .nav-icon-text {
          width: 20px;
          text-align: center;
          font-size: 1.1rem;
        }

        .chevron {
          font-size: 1.2rem;
          line-height: 1;
        }

        .nav-link.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-link.logout {
          margin-top: 1rem;
          color: #ef4444;
        }
        
        .nav-link.logout:hover {
          background-color: rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </aside>
  );
}

export default Sidebar;
