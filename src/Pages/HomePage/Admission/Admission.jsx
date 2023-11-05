import React from "react";
import icon1 from "../../../assets/images/icons/icon-1.png";
import icon2 from "../../../assets/images/icons/icon-2.png";
import icon3 from "../../../assets/images/icons/icon-3.png";
import icon4 from "../../../assets/images/icons/icon-4.png";
import admission from "../../../assets/images/admission.jpg";
import "./Admission.css";
import Countdown from "./CountDown";
import AdmissionApply from "../../OtherPages/Admission/AdmissionApply";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <section className="lg:relative lg:bottom-[40px] container mx-auto bg-white rounded-t-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10 ">
        <div className="flex items-center">
          <img src={icon1} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-serif font-bold text-blue-900">
              University Life
            </h4>
            <p className="font-serif text-gray-400">Overall in here</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={icon2} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-serif font-bold text-blue-900">
              Graduation
            </h4>
            <p className="font-serif text-gray-400">Overall in here</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={icon3} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-serif font-bold text-blue-900">
              Athletics
            </h4>
            <p className="font-serif text-gray-400">Sport Clubs</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={icon4} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-serif font-bold text-blue-900">
              Social
            </h4>
            <p className="font-serif text-gray-400">Overall in here</p>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 lg:h-[500px]">
          <img src={admission} className="lg:h-[500px] lg:w-full" alt="" />
        </div>
        <div className="lg:w-1/2 lg:h-[500px] p-10 content-bg">
          <h2 className="text-3xl font-serif text-white font-bold">
            Apply for Admission
          </h2>
          <p className="font-serif text-xl font-bold text-green-600 my-3">
            Summer 2023 applications are coming soon.
          </p>
          <p className="text-lg font-serif text-gray-300">
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they’re passionate about and dare to lead
            it.
          </p>
          <p className="text-lg font-serif text-gray-300">
            A Great University to Materialize Your Dream!
          </p>
          <Countdown></Countdown>

          <Link
            to={"/admission-apply"}
            className="btn mt-3 text-white bg-blue-600 border-none hover:bg-green-600"
          >
            Get Admission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admission;
