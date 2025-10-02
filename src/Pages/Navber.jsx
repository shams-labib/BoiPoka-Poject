import React from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-lg border-1 border-gray-300 hover:shadow-2xl hover:bg-gray-400 hover:shadow-gray-600 hover:transition duration-1000 ">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><NavLink to={'/home'} className={({isActive})=> isActive?"border-1 border-green-400 font-semibold text-green-500 pb-1": "border-2 border-transparent pb-1"}>Home</NavLink></li>
      <li><NavLink to={'/listedBooks'} className={({isActive})=> isActive?'border-1 border-green-400 font-semibold text-green-500':""}>Listed Books</NavLink></li>
      <li><NavLink to={'/pages'} className={({isActive})=> isActive?'border-1 border-green-400 font-semibold text-green-500 ':""}>Pages To Read</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn">Sign Up</a>
    <a className="btn">Log In</a>
  </div>
</div>
    );
};

export default Navber;