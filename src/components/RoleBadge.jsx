// src/components/RoleBadge.jsx - EMOJI ONLY VERSION

import { useRBAC } from "../context/RBACContext";

function RoleBadge() {
  const { role } = useRBAC();

  // Map roles to emojis
  const roleEmoji = {
    admin: "🛡️", // Crown for Admin
    manager: "🧑‍💼", // Star for Manager
    staff: "🔹", // Person for Staff
  };

  return (
    <span
      style={{
        fontSize: "24px",
        lineHeight: 1,
        cursor: "default",
      }}
      title={`Role: ${role?.toUpperCase()}`} // Shows role on hover
    >
      {roleEmoji[role] || "👤"}
    </span>
  );
}

export default RoleBadge;
