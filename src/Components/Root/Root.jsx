import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4">
                <Header></Header>
            </div>
            <div className="max-w-screen-xl mx-auto px-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;