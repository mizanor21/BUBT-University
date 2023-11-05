import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const MissionAndObjectives = () => {
  return (
    <>
      {/* => Banner For Mission And Objectives */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">
            Mission And Objectives
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
                  Mission And Objectives
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* => Text For Mission And Objectives */}
      <div className="bg-none py-8 ">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mission & Objectives
          </h2>
          <div className="text-gray-700 leading-relaxed text-justify">
            <p className="mb-4">
              <span className="font-bold">Vision</span>
              <br />
              BUBT aims to be a leading educational institution for academic
              excellence, innovation, and research.
            </p>
            <p className="mb-4">
              <span className="font-bold">Mission</span>
              <br />
              To provide quality education to students through innovative
              teaching and learning processes at an affordable cost,
              transforming BUBT graduates into competent human resources.
            </p>
            <p className="mb-4">
              <span className="font-bold">Objectives</span>
              <br />
              The principal objective of Bangladesh University of Business and
              Technology (BUBT) is to produce highly skilled manpower capable of
              contributing to national development as entrepreneurs, academics,
              professionals, and administrators. The following objectives are
              within the focus of overall activities of BUBT:
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-4 ml-6">
              <li>
                To maintain an excellent academic environment for imparting
                higher education to learners in different fields.
              </li>
              <li>
                To encourage learners to inculcate ethical, cultural, and social
                values in their thoughts, actions, and practices and follow them
                in their personal and national life.
              </li>
              <li>
                To build up a dynamic center of excellence in higher education &
                research which will generate knowledge for the creation of an
                ideal society.
              </li>
              <li>
                To develop learners' understanding of the advances in knowledge
                and complexities of the modern world and utilize these for the
                solution of problems in contemporary society.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionAndObjectives;
