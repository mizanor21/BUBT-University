import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const CulturalClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            BUBT Cultural Club
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
                  Cultural Club
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 text-justify">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Mission</h2>
        <p className="text-gray-700 mb-4">
          BUBTCC aims to promote students' creativity and professionalism
          through a cultural framework, fostering cultural diversity and
          awareness. It encourages an open-minded approach that transcends
          personal boundaries, allowing students to explore new horizons.
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Objective</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-gray-700">
            Organizing various inter-departmental cultural competitions and
            central cultural programs in the University.
          </li>
          <li className="text-gray-700">
            Observing national days solemnly with cultural events.
          </li>
          <li className="text-gray-700">
            Encouraging the budding talents of the University and developing
            their creative skills.
          </li>
          <li className="text-gray-700">
            Providing the right platform for students to showcase their talents.
          </li>
          <li className="text-gray-700">
            Enhancing students' personal skills such as confidence,
            collaboration, teamwork, discipline, communication, and
            improvisation to make them competitive in the global environment.
          </li>
          <li className="text-gray-700">
            Developing and promoting the rich diversity and uniqueness of
            various art forms, while increasing awareness and appreciation of
            cultural heritage.
          </li>
          <li className="text-gray-700">
            Making special efforts to encourage folk and tribal arts and
            organizing special programs for the preservation and strengthening
            of art forms.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CulturalClub;
