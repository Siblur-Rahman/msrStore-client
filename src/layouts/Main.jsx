import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Operationbar from "../components/Operationbar";

const Main = () => {
    return (
        <div className="relative">
            {/* navbar */}
            <Navbar></Navbar>
            {/* Operation Bar */}
            {/* <Operationbar/> */}
            {/* outlet */}
            <div className="">
            <Outlet/>
            </div>
            {/* footer */}
        </div>
    );
};

export default Main;