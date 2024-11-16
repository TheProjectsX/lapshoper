import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserDataContext from "../context/context";
import { signOut } from "firebase/auth";
import auth from "../firebase/config";
import { toast } from "react-toastify";

const Navbar = () => {
    const context = useContext(UserDataContext);
    const { dataLoading, userAuthData } = context;

    // Logout User
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout Successful");
            })
            .catch((error) => console.log(error));
    };

    const navLinks = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 bg-opacity-65 border-b border-b-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">
                    LapShopper
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                {dataLoading ? (
                    <div className="loading"></div>
                ) : userAuthData ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img alt="Avatar" src={userAuthData.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow space-y-3"
                        >
                            <li className="pointer-events-none">
                                <p className="text-base">
                                    {userAuthData.displayName}
                                </p>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to={"/login"} className="btn btn-info btn-sm">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
