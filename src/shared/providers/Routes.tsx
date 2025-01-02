import { createBrowserRouter } from "react-router-dom";
import Homepage from "../../pages/home";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    }
]);