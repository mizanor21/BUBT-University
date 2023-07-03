import React from "react";
import { useLoaderData } from "react-router-dom";
import Faculty from "./Faculty";

const Facultys = () => {
  const facultys = useLoaderData();
  return (
    <div className="container mx-auto flex justify-center items-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {facultys.map((faculty) => (
          <Faculty key={faculty._id} faculty={faculty}></Faculty>
        ))}
      </div>
    </div>
  );
};

export default Facultys;
