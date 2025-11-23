export const ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  STAFF: "staff",
};

export const PERMISSIONS = {
  [ROLES.ADMIN]: {
    dashboard: true,
    productsView: true,
    productsEdit: true,
    pos: true,
    settings: true,
    users: true,
  },
  [ROLES.MANAGER]: {
    dashboard: true,
    productsView: true,
    productsEdit: true,
    pos: true,
    settings: false,
    users: false,
  },
  [ROLES.STAFF]: {
    dashboard: true,
    productsView: true,
    productsEdit: false,
    pos: true,
    settings: false,
    users: false,
  },
};

// For testing - change this to test different roles
export const getUserRole = (userId) => {
  // CHANGE THIS LINE TO TEST DIFFERENT ROLES:
  return ROLES.ADMIN; // Try: ROLES.ADMIN, ROLES.MANAGER, or ROLES.STAFF

  // Later, you can implement proper role fetching:
  // return user.publicMetadata?.role || ROLES.STAFF;
};
