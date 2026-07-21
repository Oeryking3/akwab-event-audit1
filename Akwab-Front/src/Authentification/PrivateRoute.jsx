import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const userRaw = localStorage.getItem("user");
  const user = userRaw ? JSON.parse(userRaw) : null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if (!user || user.id_role !== 1) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}