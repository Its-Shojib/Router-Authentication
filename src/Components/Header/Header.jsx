import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {

    let { user, Logout } = useContext(AuthContext);

    let handleLogout = () => {
        Logout()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    let Navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>

        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to='/orders'>Orders</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">

                <div className="navbar-start md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                    </div>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold navbar-end md:navbar-start">Router-Authentication</h1>
                <div className="navbar-center hidden md:flex gap-5">
                    <ul className="menu menu-horizontal px-1">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span className="pr-3">{user.email? user.email : user.displayName}</span>
                                <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded-md">Sign Out</button>
                            </>
                            :
                            <Link to='/login'><button className="bg-green-500 text-white px-4 py-2 rounded-md">Login</button></Link>


                    }

                </div>

            </div>
        </div>
    );
};

export default Header;