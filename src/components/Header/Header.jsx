import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className="hover:underline hover:text-[#7E90FE]"><NavLink to="/">Home</NavLink></li>
        <li className="hover:underline hover:text-[#7E90FE]"><NavLink to="/statistics">Statistics</NavLink></li>
        <li className="hover:underline hover:text-[#7E90FE]"><NavLink to="/appliedJobs">Applied Jobs</NavLink></li>
        <li className="hover:underline hover:text-[#7E90FE]"><NavLink to="/blogs">Blogs</NavLink></li>
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

                <Link className="text-3xl md:text-4xl text-[#1A1919] font-extrabold"
                    to="/">CareerHub</Link>

            </div>

            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="flex items-center gap-6 font-semibold">
                    {
                        links
                    }
                </ul>
            </div>
 
            <div className="navbar-end">

                <button className=" bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-2 py-1 md:px-4 md:py-3 rounded-md md:rounded-lg text-white md:text-lg font-medium md:font-semibold">
                    Start Applying
                </button>

            </div>
        </div>
    );
};

export default Header;