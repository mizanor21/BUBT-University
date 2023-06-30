import React from "react";
import { useLoaderData } from "react-router-dom";

const EventDetails = () => {
  const { img, title } = useLoaderData();
  return (
    <div className="container mx-auto my-10 mockup-window border bg-base-300">
      {/* {title} */}
      <div className=" bg-base-200">
        <img className="w-full" src={img} alt="img not found!" />
      </div>
    </div>
  );
};

export default EventDetails;
