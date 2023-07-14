import React from "react";
import { Link } from "react-router-dom";

const Faculty = ({ faculty }) => {
  const { _id, img, name, facultyCode, position } = faculty;
  return (
    <div>
      <Link
        to={`/faculty-details/${_id}`}
        className="card bg-base-100 border-b-8 border-orange-400 hover:border-green-600 hover:-translate-y-2 hover:duration-500 shadow-xl"
      >
        <figure>
          <img className="w-full h-[300px]" src={img} alt={name} />
        </figure>
        <div className="card-body p-4 gap-0">
          <h2 className="text-lg font-bold font-serif p-0">{name}</h2>
          <small>{position}</small>
          <small>
            Faculty Code: <span className="font-bold">{facultyCode}</span>
          </small>
        </div>
      </Link>
    </div>
  );
};

export default Faculty;
