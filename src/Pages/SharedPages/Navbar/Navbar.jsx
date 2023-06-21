import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMenuEnter = (menuIndex) => {
    setActiveMenu(menuIndex);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/" },
    {
      label: "Academics",
      submenu: [
        { label: "history", path: "/history" },
        { label: "Submenu 2", path: "/" },
      ],
    },
    {
      label: "Admission",
      submenu: [
        { label: "Submenu 1", path: "/" },
        { label: "Submenu 2", path: "/" },
      ],
    },
    {
      label: "Students",
      submenu: [
        { label: "Submenu 1", path: "/" },
        { label: "Submenu 2", path: "/" },
      ],
    },
    {
      label: "Clubs",
      submenu: [
        { label: "Submenu 1", path: "/" },
        { label: "Submenu 2", path: "/" },
      ],
    },
    { label: "Contacts", path: "/" },
  ];

  return (
    //this is navbar
    <div className="bg-white sticky top-0 z-50">
      <div className="container mx-auto navbar flex items-center justify-between py-4">
        <div className="navbar-start">
          <NavLink to={"/"}>
            <img className="w-64" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-serif relative"
                onMouseEnter={() => handleMenuEnter(index)}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  className="text-blue-900 bg-white text-lg  border-white border-b-4 hover:text-green-600 hover:border-green-600 hover:bg-gray-200 px-4 py-2"
                  to={item.path}
                >
                  {item.label}
                </NavLink>
                {item.submenu && activeMenu === index && (
                  <ul className="p-2 absolute top-full left-0 z-10 bg-white border border-gray-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="font-serif">
                        <NavLink
                          className="block py-2 px-4 bg-white text-blue-900 hover:text-green-600"
                          to={subItem.path}
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
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
          <button
            className="btn btn-ghost btn-circle lg:hidden"
            onClick={toggleDropdown}
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
          </button>
          {isDropdownOpen && (
            <ul className="menu menu-dropdown px-1 absolute top-full left-0 bg-white border border-gray-200">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="font-serif relative"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <NavLink
                    className="text-blue-900 text-lg border-white border-b-4 hover:text-green-600 hover:border-green-600 hover:bg-gray-200 px-4 py-2"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && activeMenu === index && (
                    <ul className="p-2 bg-white border border-gray-200">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="font-serif">
                          <NavLink
                            className="block py-2 px-4 text-blue-900 hover:text-green-600"
                            to={subItem.path}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
