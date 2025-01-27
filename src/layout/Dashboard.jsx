import { FaDollarSign, FaHome, FaUsers } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hook/useAdmin";
import UseHR from "../hook/useHR";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isHR] = UseHR();

    return (
        <div className="flex px-10">
            <div className="w-64 min-h-screen bg-stone-400 ">
                <ul className="menu p-10">
                    {
                        user && <>
                            <li>
                                <NavLink to="/dashboard/employeeHome">Employee Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/employee">Work Sheet</NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/employeePayment">Payment History</NavLink>
                            </li>
                        </>
                    }
                    {
                        isAdmin && <>
                            <li>
                                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allEmployee">
                                    <FaUsers></FaUsers> All Employee List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/employeeList">Employee List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payRoll">
                                    <FaDollarSign></FaDollarSign> Pay Roll
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isHR && <>
                            <li>
                                <NavLink to="/dashboard/hrHome">HR Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/employeeList">Employee List</NavLink>
                            </li>
                        </>
                    }

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <IoMdMail />
                            CONTACT</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default Dashboard;
