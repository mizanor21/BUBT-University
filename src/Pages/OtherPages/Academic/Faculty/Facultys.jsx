import React from "react";
import { useLoaderData } from "react-router-dom";
import Faculty from "./Faculty";
import image1 from "../../../../assets/images/convocation.jpeg";

const Facultys = () => {
  const facultys = useLoaderData();
  return (
    <div>
      <div className="relative ">
        <img
          src={image1}
          alt="Banner"
          className="object-cover w-full h-48 md:h-64 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900 font-serif">
          <h1 className="text-white text-2xl md:text-3xl font-bold border-b-4 border-white pb-2">
            Faculty Members
          </h1>
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Department of CSE
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {facultys.map((faculty) => (
            <Faculty key={faculty._id} faculty={faculty}></Faculty>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facultys;
