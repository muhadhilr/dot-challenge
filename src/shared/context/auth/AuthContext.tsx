import { createContext } from "react";
import { IAuthContext } from "@shared/models/types/auth";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);