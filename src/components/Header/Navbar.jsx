import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedbooks">Listed Books</NavLink></li>
        <li><NavLink to="/pages">Pages to Read</NavLink></li>
        <li><NavLink to="/featured">Featured</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <a className="btn btn-ghost text-xl lg:text-5xl font-heading">Book Vibe</a>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex lg:gap-5">
                    <a className="btn btn-xs sm:btn-sm md:btn-md  bg-green-600 text-white lg:text-lg ">Sign In</a>
                    <a className="btn btn-xs sm:btn-sm md:btn-md  bg-teal-300 text-white lg:text-lg">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;