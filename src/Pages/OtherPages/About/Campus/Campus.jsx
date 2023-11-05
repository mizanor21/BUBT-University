import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import image2 from "../../../../assets/images/uni-image-one.jpg";
import image3 from "../../../../assets/images/uni-image-two.jpg";
import { Link } from "react-router-dom";

const Campus = () => {
  return (
    <>
      {/* => Banner For Campus */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Campus</h1>
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
                  Campus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* => Text For Campus */}

      <div className="container mx-auto px-4 mt-8">
        <div className="">
          <h3 className="text-2xl md:text-3xl font-bold">
            The Permanent Campus of BUBT
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex">
            <div className="animate-fade-in delay-100 lg:w-1/2 my-3">
              <p className="text-gray-700 leading-relaxed">
                The permanent campus of BUBT is located at Rupnagar, Mirpur-2,
                Dhaka-1216 with three spacious buildings and with all facilities
                for higher education. It is surrounded by a good number of
                educational institutions in an excellent academic atmosphere.
                The campus of BUBT has excellent communication links from all
                parts of the Dhaka City as well as from outside the City by
                cars, buses, taxis, rickshaws, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="animate-fade-in delay-200 grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
          <img src={image2} alt="" className=" object-cover mb-4 rounded-lg" />
          <img src={image3} alt="" className=" object-cover rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Campus;
