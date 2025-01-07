import { ILogin } from "@shared/models/types/auth";
import { userLogin, userRefresh } from "@shared/services/auth/authServices";
import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (data: ILogin) => {
    try {
      const submitLogin = await userLogin(data);
      setUser(data.username);
      sessionStorage.setItem("app_1", submitLogin.accessToken);
      toast.success("Login successful");
    } catch (error) {
      console.error("Login Services: Login: ", error);
      toast.error("Login failed");
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
    sessionStorage.clear();
    toast.success("Logout successful");
  };
  useEffect(() => {
    const checkingUser = async (): Promise<void> => {
      try {
        const token = sessionStorage.getItem("app_1");
        if (token) {
          await userRefresh();
        }
      } catch (error) {
        console.error("Login Services: Checking User: ", error);
        toast.error("Your session has expired, please login again");
        throw error;
      }
    };

    checkingUser();
  }, []);

  const isAuth = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
