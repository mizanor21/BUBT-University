import React from "react";
import { Link } from "react-router-dom";

const ClassNotice = ({ classNotice }) => {
  return (
    <div className="border p-2">
      <Link
        className="text-lg font-bold"
        to={`/notice-details/${classNotice._id}`}
      >
        {classNotice.title}
      </Link>
      <br />
      <small className="text-slate-500">
        Published on {classNotice.createdAt}
      </small>
      <br />
    </div>
  );
};

export default ClassNotice;
