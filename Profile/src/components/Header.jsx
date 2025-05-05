import React from 'react';
import { NavLink } from 'react-router-dom';
// import './headerStyle.css'
function Header() {
    return (
        <header className="bg-white shadow-md w-full">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center font-heading">

                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img src="" alt="logo" className="w-10 h-10 object-cover rounded-full bg-gray-200" />
                    <span className="text-xl font-bold text-gray-800">Nikhil</span>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/resume" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/skills" 
                            className={({ isActive }) =>
                                isActive 
                                    ? "text-orange-700 border-b-2 border-orange-700 pb-1" 
                                    : "hover:text-orange-700"
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
