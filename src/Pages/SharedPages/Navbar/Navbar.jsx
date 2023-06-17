import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li className="font-serif">
        <NavLink
          className="bg-white text-blue-900 text-lg border-white border-b-4 hover:text-green-600 hover:border-green-600 hover:bg-gray-200"
          to={""}
        >
          Home
        </NavLink>
      </li>
      <li className="font-serif">
        <NavLink
          className="bg-white text-blue-900 text-lg border-white border-b-4 hover:text-green-600 hover:border-green-600 hover:bg-gray-200"
          to={""}
        >
          About
        </NavLink>
      </li>
      <li className="font-serif" tabIndex={0}>
        <details>
          <summary className="bg-white text-blue-900 text-lg  border-white border-b-4 hover:border-green-600">
            Academics
          </summary>
          <ul className="p-2">
            <li className="font-serif">
              <a>Submenu 1</a>
            </li>
            <li className="font-serif">
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="font-serif" tabIndex={0}>
        <details>
          <summary className="bg-white text-blue-900 text-lg  border-white border-b-4 hover:border-green-600">
            Admission
          </summary>
          <ul className="p-2">
            <li className="font-serif">
              <a>Submenu 1</a>
            </li>
            <li className="font-serif">
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="font-serif" tabIndex={0}>
        <details>
          <summary className="bg-white text-blue-900 text-lg  border-white border-b-4 hover:border-green-600">
            Students
          </summary>
          <ul className="p-2">
            <li className="font-serif">
              <a>Submenu 1</a>
            </li>
            <li className="font-serif">
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li className="font-serif" tabIndex={0}>
        <details>
          <summary className="bg-white text-blue-900 text-lg  border-white border-b-4 hover:border-green-600">
            Clubs
          </summary>
          <ul className="p-2">
            <li className="font-serif">
              <a>Submenu 1</a>
            </li>
            <li className="font-serif">
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>

      <li className="font-serif">
        <NavLink
          className="bg-white text-blue-900 text-lg border-white border-b-4 hover:text-green-600 hover:border-green-600 hover:bg-gray-200"
          to={""}
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white sticky top-0">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <NavLink to={"/"}>
            <img className="w-72" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
