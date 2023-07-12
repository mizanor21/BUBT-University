import React from "react";
import { useLoaderData } from "react-router-dom";

const ClassRoutineDetails = () => {
  const { routineURL } = useLoaderData();
  return (
    <div className="container mx-auto max-w-4xl my-10 mockup-window border bg-base-300">
      <div className="flex justify-center bg-base-200">
        <iframe
          width="100%"
          height="800"
          src={routineURL}
          frameborder="0"
          allowtransparency
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ClassRoutineDetails;
