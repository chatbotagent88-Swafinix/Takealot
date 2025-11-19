import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  // Wait for Clerk to load
  if (!isLoaded) return null;

  // If not signed in → redirect to Clerk sign-in page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
