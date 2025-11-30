import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

import { RBACProvider } from "./context/RBACContext";
import RoleProtectedRoute from "./components/RoleProtectedRoute"; // NEW - For RBAC

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import AutoPrice from "./pages/AutoPrice";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import POS from "./pages/POS";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Unauthorized from "./pages/Unautorized";

function App() {
  return (
    <>
      <SignedOut>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </Routes>
      </SignedOut>

      <SignedIn>
        <RBACProvider>
          <div className="app-container">
            <div className="dashboard-layout">
              <Sidebar />
              <div className="main-content">
                <Topbar />

                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />

                  {/* Protected by role-based access control */}
                  <Route
                    path="/dashboard"
                    element={
                      <RoleProtectedRoute permission="dashboard">
                        <Dashboard />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/products"
                    element={
                      <RoleProtectedRoute permission="productsView">
                        <Products />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/sales"
                    element={
                      <RoleProtectedRoute permission="productsView">
                        <Sales />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/auto-price"
                    element={
                      <RoleProtectedRoute permission="productsView">
                        <AutoPrice />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/reports"
                    element={
                      <RoleProtectedRoute permission="productsView">
                        <Reports />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/integrations"
                    element={
                      <RoleProtectedRoute permission="dashboard">
                        <Integrations />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/pos"
                    element={
                      <RoleProtectedRoute permission="pos">
                        <POS />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/settings"
                    element={
                      <RoleProtectedRoute permission="settings">
                        <Settings />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route
                    path="/users"
                    element={
                      <RoleProtectedRoute permission="users">
                        <Users />
                      </RoleProtectedRoute>
                    }
                  />

                  <Route path="/unauthorized" element={<Unauthorized />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </div>
            </div>
          </div>
        </RBACProvider>
      </SignedIn>
    </>
  );
}

export default App;
