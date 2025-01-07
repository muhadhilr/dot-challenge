import { AuthContext } from "@shared/context/auth/AuthContext";
import { IAuthContext } from "@shared/models/types/auth";
import { useContext } from "react";

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
