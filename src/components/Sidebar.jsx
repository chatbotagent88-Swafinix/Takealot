import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">🔖 Takealot CRM</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-link">
          📊 Dashboard
        </NavLink>
        <NavLink to="/products" className="nav-link">
          📦 Products
        </NavLink>
        <NavLink to="/pos" className="nav-link">
          💳 POS / Billing
        </NavLink>
        <NavLink to="/users" className="nav-link">
          👥 Users
        </NavLink>
        <NavLink to="/settings" className="nav-link">
          ⚙️ Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;