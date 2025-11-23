import { createContext, useContext } from "react";
import { useUser } from "@clerk/clerk-react";
import { PERMISSIONS, getUserRole } from "../config/rbac";

const RBACContext = createContext(null);

export const useRBAC = () => {
  const context = useContext(RBACContext);
  if (!context) {
    throw new Error("useRBAC must be used within RBACProvider");
  }
  return context;
};

export function RBACProvider({ children }) {
  const { user } = useUser();

  const role = user ? getUserRole(user.id) : null;
  const permissions = role ? PERMISSIONS[role] : {};

  const hasPermission = (permission) => {
    return permissions[permission] === true;
  };

  const canAccess = (routePath) => {
    const routePermissions = {
      "/dashboard": "dashboard",
      "/products": "productsView",
      "/pos": "pos",
      "/settings": "settings",
      "/users": "users",
    };

    const permission = routePermissions[routePath];
    return permission ? hasPermission(permission) : false;
  };

  return (
    <RBACContext.Provider
      value={{ role, permissions, hasPermission, canAccess }}
    >
      {children}
    </RBACContext.Provider>
  );
}
