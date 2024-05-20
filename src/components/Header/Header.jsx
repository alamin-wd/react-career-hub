import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar ">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>

                <Link className="text-4xl text-[#1A1919] font-extrabold"
                    to="/">CareerHub</Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            
            <div className="navbar-end">

                <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                Start Applying
                </button>

            </div>
        </div>
    );
};

export default Header;