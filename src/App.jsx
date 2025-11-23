import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import POS from "./pages/POS";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// ✅ Unauthorized Page Import
import Unauthorized from "./pages/Unautorized";

function App() {
  return (
    <>
      {/* When NOT logged in → Show SignIn / SignUp only */}
      <SignedOut>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Any other route redirects to sign-in */}
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Routes>
      </SignedOut>

      {/* When logged in → Show dashboard layout */}
      <SignedIn>
        <div className="app-container">
          <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
              <Topbar />

              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pos" element={<POS />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<Users />} />

                {/* ✅ Unauthorized Page Route */}
                <Route path="/unauthorized" element={<Unauthorized />} />

                {/* Optional: Unknown routes → go to dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </div>
          </div>
        </div>
      </SignedIn>
    </>
  );
}

export default App;
