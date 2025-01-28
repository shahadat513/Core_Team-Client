import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Shared/Login";
import Signup from "../pages/Shared/Signup";
import PrivateRoutes from "./privateRoutes";
import ContactUs from "../pages/Home/ContactUs";
import Dashboard from "../layout/Dashboard";
import Employee from "../pages/Dashboard/Employee/Employee";
import AllEmployee from "../pages/Dashboard/Admin/AllEmployee";
import HR from "../pages/Dashboard/HR/HR";
import HRHome from "../pages/Dashboard/HR/HRHome";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import EmployeeHome from "../pages/Dashboard/Employee/EmployeeHome";
import Payment from "../component/Payment";
import Payroll from "../pages/Dashboard/Admin/PayRoll";
import PaymentHistory from "../pages/Dashboard/Employee/PaymentHistory";

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
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement: <h2>Page Not Found</h2>,
        children: [
            // Employee
            {
                path: "employeeHome",
                element: <EmployeeHome></EmployeeHome>
            },
            {
                path: "employee",
                element: <Employee></Employee>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },


            // Admin 
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "allEmployee",
                element: <AllEmployee></AllEmployee>
            },
            {
                path: "payroll",
                element: <Payroll></Payroll>
            },
            {
                path: "payment/:id",
                element: <Payment></Payment>
            },


            // HR
            {
                path: "hrHome",
                element:<HRHome></HRHome>
            },
            {
                path: "employeeList",
                element: <HR></HR>
            },
        ]
    }

]);

export default router;

