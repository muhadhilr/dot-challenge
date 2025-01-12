import { IAuthResponse, ILogin } from "@shared/models/types/auth";
import authInstance from "./authInstance";

export const userLogin = async (data: ILogin): Promise<IAuthResponse> => {
  try {
    const response = await authInstance.post("auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Login Services: Login: ", error);
    throw error;
  }
};

export const userData = async (): Promise<string> => {
  try {
    const response = await authInstance.get("auth/me", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("app_1")}` },
    });
    return response.data.username;
  } catch (error) {
    console.error("Login Services: User Data: ", error);
    throw new Error("Login failed");
  }
};

export const userRefresh = async (): Promise<void> => {
  try {
    const refresh = await authInstance.post("auth/refresh");
    if (refresh.status === 200) {
      sessionStorage.setItem("app_1", refresh.data.accessToken);
    }
  } catch (error) {
    console.error("Login Services: Refresh: ", error);
    throw error;
  }
};
