import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const SemesterPolicy = () => {
  return (
    <>
      {/* Banner For Semester Policy */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Semester Policy</h1>
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
                  Semester Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Text For semester policy */}
      <div className="my-8 mx-auto max-w-3xl text-justify">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          Academic Year and Semester Duration
        </h2>
        <p className="text-gray-700 ">
          BUBT follows a model of higher education consisting of semesters,
          courses, credit hours, continuous evaluation, and letter grading. The
          academic year begins from October and runs through September of the
          following year. An academic year is divided into the following three
          semesters:
        </p>
        <div className="flex">
          <div className="overflow-x-auto">
            <table className="table-auto table-zebra mt-4">
              {/* Head */}
              <thead className="bg-slate-200">
                <tr>
                  <th className="px-4 py-2"> </th>
                  <th className="px-4 py-2">Semester Name</th>
                  <th className="px-4 py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Fall</td>
                  <td className="px-4 py-2">October - January</td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Spring</td>
                  <td className="px-4 py-2">February - May</td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Summer</td>
                  <td className="px-4 py-2">June - September</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemesterPolicy;
