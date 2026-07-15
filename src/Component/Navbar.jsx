import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/7515317.jpg"
const Navbar = () => {
  
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/product" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/cart" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        
       
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow-lg gap-2 border border-base-200"
            >
              {navLinks}
            </ul>
          </div>
          {/* <Link to="/" className="btn btn-ghost text-xl font-bold tracking-wide text-primary">
            Fashion<span className="text-base-content">Store</span>
          </Link> */}
          <img src={logo} alt="" srcset=""  className='w-24 h-20'/>
        </div>

     
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-base font-medium">
            {navLinks}
          </ul>
        </div>

   
        <div className="navbar-end">
          <Link   className="btn bg-blue-500 text-white">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;