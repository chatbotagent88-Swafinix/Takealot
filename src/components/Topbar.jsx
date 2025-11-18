import { UserButton } from "@clerk/clerk-react";
import { useState } from "react";

function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-left">
          <div className="search-container">
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search products, orders, customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <kbd className="search-shortcut">Ctrl K</kbd>
          </div>
        </div>

        <div className="topbar-right">
          <button className="topbar-icon-btn" title="Notifications">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge">3</span>
          </button>

          <button className="topbar-icon-btn" title="Messages">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <div className="topbar-divider"></div>

          <div className="topbar-user">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
