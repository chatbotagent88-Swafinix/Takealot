import { Navigate } from "react-router-dom";
import { useRBAC } from "../context/RBACContext";

export default function RoleProtectedRoute({ children, permission }) {
  const { hasPermission } = useRBAC();

  if (!hasPermission(permission)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
