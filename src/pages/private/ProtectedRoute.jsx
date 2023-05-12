import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../../context/Context";
import { Loading } from "../public/Loading";

export function ProtectedRoute({ redirecto = "/logIn" }) {
  const { user, loading } = useContext(Context);
  if (loading) return <Loading />;
  if (user) return <Outlet />;
  return <Navigate to={redirecto} />;
}
