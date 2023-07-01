import React from "react";

const Programs = ({ department }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={department?.img} alt="img not found!" />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className="card-title">{department?.department}</h2>
        </div>
      </div>
    </div>
  );
};

export default Programs;
