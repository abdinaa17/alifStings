// Global Imports
import { Navigate, Outlet } from "react-router-dom";

// Local Imports
import { LoadingSpinner } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
