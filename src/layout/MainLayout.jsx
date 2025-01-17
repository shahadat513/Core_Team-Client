import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <div className="min-h-[calc(100vh-340px)]">
                    <Outlet></Outlet>
                </div >
                <Footer></Footer>
        </div>
    );
}

export default MainLayout;