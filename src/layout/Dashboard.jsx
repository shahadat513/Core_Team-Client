import { FaHome } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex px-10">
            <div className="w-64 min-h-screen bg-stone-400 ">
                <ul className="menu p-10">
                    <li>
                        <NavLink to="/dashboard/employee">Employee</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/hr">HR</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/hr">Admin</NavLink>
                    </li>
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
