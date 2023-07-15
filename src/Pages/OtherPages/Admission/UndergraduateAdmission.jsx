import React from "react";
import UndergraduatePrograms from "../../HomePage/TabNoticeProgramsEvent/Programs/UnderGraduatePrograms";
import image1 from "../../../assets/images/convocation.jpeg";

const UndergraduateAdmission = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className=" text-white text-4xl font-serif font-bold">
            Undergraduate Programs
          </h1>
        </div>
      </div>
      <h3 className="text-2xl font-bold container mx-auto mt-10">
        Undergraduate Programs
      </h3>
      <UndergraduatePrograms></UndergraduatePrograms>
    </div>
  );
};

export default UndergraduateAdmission;
