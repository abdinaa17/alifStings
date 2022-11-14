// Global Imports
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Local Imports
import { auth } from "../../config/firebase";
const PrivateRoute = () => {
  const [user] = useAuthState(auth);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
