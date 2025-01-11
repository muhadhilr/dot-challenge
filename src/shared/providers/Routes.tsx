import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@pages/auth";
import Homepage from "@pages/home";
import App from "../../App";
import QuizPage from "@pages/quiz";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/auth",
                element: <AuthPage />
            },
            {
                path: "/quiz",
                element: <QuizPage />
            }
        ]
    }
]);