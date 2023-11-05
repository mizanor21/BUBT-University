import React from "react";
import GraduatePrograms from "../../HomePage/TabNoticeProgramsEvent/Programs/GraduatePrograms";
import image1 from "../../../assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const GraduateAdmission = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-white text-2xl lg:text-4xl font-serif font-bold">
            Graduate Programs
          </h1>
          <div className="text-sm text-white breadcrumbs">
            <ul>
              <li>
                <Link to={"/"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    ></path>
                  </svg>
                  Graduate Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold container mx-auto mt-10">
        Graduate Programs
      </h3>
      <GraduatePrograms></GraduatePrograms>
    </div>
  );
};

export default GraduateAdmission;
