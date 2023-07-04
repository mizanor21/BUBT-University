import React from "react";
import { useLoaderData } from "react-router-dom";

const FacultyDetails = () => {
  const { img } = useLoaderData();
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default FacultyDetails;
