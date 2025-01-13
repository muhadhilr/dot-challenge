import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@pages/auth";
import Homepage from "@pages/home";
import App from "../../App";
import QuizPage from "@pages/quiz";
import ResultPage from "@pages/result";
import ProtectedRoute from "./ProtectedRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/quiz",
        element: (
          <ProtectedRoute>
            <QuizPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/result",
        element: (
          <ProtectedRoute>
            <ResultPage />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
