import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
    const linkStyles = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isActive 
            ? "bg-[#1B3C35] text-white shadow-md" 
            : "text-gray-600 hover:bg-gray-100"
        }`;

    return (
        <div className="navbar bg-white border-b border-gray-100 px-4 md:px-12 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        <li>
                            <NavLink to="/" className={linkStyles}>
                                <Home size={18} /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/timeline" className={linkStyles}>
                                <Clock size={18} /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stats" className={linkStyles}>
                                <BarChart3 size={18} /> Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/" className="flex items-center gap-1 cursor-pointer no-underline">
                    <span className="text-2xl font-bold text-[#1F2937]">Keen</span>
                    <span className="text-2xl font-bold text-[#244D3F]">Keeper</span>
                </NavLink>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <NavLink to="/" className={linkStyles}>
                            <Home size={18} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/timeline" className={linkStyles}>
                            <Clock size={18} /> Timeline
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stats" className={linkStyles}>
                            <BarChart3 size={18} /> Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;