import { UserButton } from '@clerk/clerk-react';

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-content">
        <h1 className="topbar-title">CRM Dashboard</h1>
        <div className="topbar-user">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </header>
  );
}

export default Topbar;