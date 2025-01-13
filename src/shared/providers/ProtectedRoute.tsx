import { useAuth } from "@shared/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoutes {
  children: ReactNode;
}

const ProtectedRoute = (props: IProtectedRoutes) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={"/"} replace />;
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;
