import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";
import { Link } from "react-router-dom";

const BUBTITClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            BUBT IT Club
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
                  BUBT IT Club
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto my-10">
        <div className="">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">BUBT IT CLUB</h2>
          <p className="text-gray-700 mb-4">
            BUBT IT CLUB embarked on its generous journey in September 2011.
            Through the dedicated efforts of students and teachers from various
            departments, led by the Department of Computer Science and
            Engineering (CSE), BUBT IT CLUB was established with the purpose of
            imparting IT knowledge to students from all disciplines. The club's
            primary objective is to effectively disseminate knowledge among
            individuals who are eager to learn about technology. To achieve this
            goal, the club organizes numerous philanthropic activities. It is a
            remarkable achievement that the club is self-financed, adding to its
            success.
          </p>
        </div>
        <div className="">
          <p className="text-gray-700 mb-4">
            This CLUB organizes different workshops, seminars to dilate the ken
            of students and external audiences. Added with this, members of the
            CLUB arrange Math Olympiad, numerous mathematic and logical problem
            solving competitions, programming contest & campaign and many more
            creative and brain storming events like them. As an outcome, IT CLUB
            and the Dept. of CSE combindly launch its annual mega program for
            the fourth time which is well recognized as CSE FIESTA. It is
            encouraging that FIESTA gives an opportunity to a nationwide
            programming contest under the title of ACM ICPC. Apart from this,
            other lucrative events just as - Gaming contest, Hacking,
            Outsourcing Programming Camp are to be the special parts of the
            program CSE FIESTA-13. This CLUB strongly believes that
            extra-curricular activities help students to improve analytical and
            reasoning skill which will make them expert and astute to solve
            problems in real life.
          </p>
        </div>
      </div>
    </>
  );
};

export default BUBTITClub;
