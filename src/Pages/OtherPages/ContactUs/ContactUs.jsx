import React from "react";
import image1 from "../../../assets/images/convocation.jpeg";
import { FaLocationArrow,FaPhone,FaMobile,FaWhatsapp,FaViber,FaInternetExplorer } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      {/* Banner For Contact us
       */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">ContactUs</h1>
        </div>
      </div>
      <div className="flex justify-center  container mx-auto w-1/2">
        <div className=" flex">
          <div className="w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
            <p className="mb-2">
              <FaLocationArrow/>: Rupnagar R/A, Mirpur-2, Dhaka-1216, Bangladesh
            </p>
            <p className="mb-2"><FaPhone/>: 4803-6351, 4803-6352, 4803-6353</p>
            <p className="mb-2">
              Admission Hotline Number 01810033733 01810033701, 01810033702,
              01810033703, 01810033704, 01810033705, 01810033706
            </p>
            <p className="mb-2">
              <FaPhone/>: 01967169189, 01845734337, 01680050630,
              01741129235, 01554882075
            </p>
            <p className="mb-2"><FaWhatsapp/> :01680050630</p>
            <p className="mb-2"><FaViber/>:01680050630</p>
            <p className="mb-2">Email: info@bubt.edu.bd</p>
            <p className="mb-2">Website: http://bubt.edu.bd</p>
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-2xl font-bold mb-4">Contact Form</h1>
            <form className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />

              <label className="block mb-2 mt-4" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />

              <label className="block mb-2 mt-4" htmlFor="message">
                Message:
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>

              <button
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
