import React from "react";
import { Link } from "react-router-dom";

const Faculty = ({ faculty }) => {
  const { _id, img, name, facultyCode, position } = faculty;
  return (
    <div>
      <Link
        to={`/faculty-details/${_id}`}
        className="card bg-base-100 border-b-8 border-green-600 hover:border-green-700 hover:animate-pulse shadow-xl"
      >
        <figure>
          <img className="w-full" src={img} alt={name} />
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
