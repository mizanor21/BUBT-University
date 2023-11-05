import React from "react";
import image1 from "../../../assets/images/convocation.jpeg";
import {
  FaLocationArrow,
  FaPhone,
  FaMobile,
  FaWhatsapp,
  FaViber,
  FaInternetExplorer,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const submitForm = () => {
  toast.success("Submit your contact info!");
};

const ContactUs = () => {
  return (
    <div>
      {/* Banner For Contact us */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            Contact Us
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
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
            <p className="mb-2 flex items-center">
              <FaLocationArrow className="mr-2" />
              Rupnagar R/A, Mirpur-2, Dhaka-1216, Bangladesh
            </p>
            <p className="mb-2 flex items-center">
              <FaPhone className="mr-2" />
              4803-6351, 4803-6352, 4803-6353
            </p>
            <p className="mb-2">
              Admission Hotline Number 01810033733 01810033701, 01810033702,
              01810033703, 01810033704, 01810033705, 01810033706
            </p>
            <p className="mb-2">
              <FaPhone className="mr-2" />
              01967169189, 01845734337, 01680050630, 01741129235, 01554882075
            </p>
            <p className="mb-2 flex items-center">
              <FaWhatsapp className="mr-2" />
              01680050630
            </p>
            <p className="mb-2 flex items-center">
              <FaViber className="mr-2" />
              01680050630
            </p>
            <p className="mb-2">Email: info@bubt.edu.bd</p>
            <p className="mb-2">Website: http://bubt.edu.bd</p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
            <form>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={submitForm}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
