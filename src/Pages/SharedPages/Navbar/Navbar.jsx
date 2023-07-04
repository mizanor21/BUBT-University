import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

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
    {
      label: "About",
      submenu: [
        { label: "History", path: "/history" },
        { label: "Mission & Objectives", path: "/missionandobjectives" },
        { label: "Campus", path: "/campus" },
        {
          label: "General Rules and Regulations",
          path: "/GeneralRulesandRegulations",
        },
        {
          label: "Career",
          path: "/career",
        },
      ],
    },
    {
      label: "Academics",
      submenu: [
        { label: "Faculty of CSE", path: "/faculty" },
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

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollpos > currentScrollPos);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white sticky top-0 z-50 shadow-md font-serif ${
        showNavbar ? "show" : "hide"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img className="w-52" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative text-gray-800"
                onMouseEnter={() => handleMenuEnter(index)}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  className="py-2 px-4 border-b-4 border-transparent hover:text-green-600 hover:border-green-600 truncate"
                  activeClassName="border-green-600"
                  to={item.path}
                >
                  {item.label}
                </NavLink>
                {item.submenu && activeMenu === index && (
                  <ul className="absolute left-0 mt-2 py-2 bg-white rounded shadow-lg flex flex-wrap">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 truncate"
                          activeClassName="text-green-600"
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
        <div className="flex items-center">
          <button className="btn btn-circle btn-primary mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            className="btn btn-circle btn-primary lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
            <ul className="absolute top-full left-0 mt-2 py-2 bg-white rounded shadow-lg flex flex-wrap">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative text-gray-800"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <NavLink
                    className="block px-4 py-2 border-b border-transparent hover:text-green-600 hover:border-green-600 truncate"
                    activeClassName="border-green-600"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && activeMenu === index && (
                    <ul className="absolute left-0 top-24 md:top-16 mt-0 py-2 bg-white rounded shadow-lg">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 truncate"
                            activeClassName="text-green-600"
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
