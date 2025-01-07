import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "@shared/providers/Routes";
import { AuthProvider } from "@shared/context/auth/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
