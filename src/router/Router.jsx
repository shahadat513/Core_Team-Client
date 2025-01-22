import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Shared/Login";
import Signup from "../pages/Shared/Signup";
import PrivateRoutes from "./privateRoutes";
import ContactUs from "../pages/Home/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Page Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/contact",
                element: <PrivateRoutes><ContactUs></ContactUs></PrivateRoutes>
            }
        ]
    },
]);

export default router;

