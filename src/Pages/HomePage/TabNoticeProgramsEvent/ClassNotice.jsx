import React from "react";
import { Link } from "react-router-dom";

const ClassNotice = ({ classNotice }) => {
  return (
    <div className="border border-b-2 p-2">
      <Link
        className="text-lg font-bold"
        to={`/notice-details/${classNotice._id}`}
      >
        {classNotice.title}
      </Link>
      <br />
      <small>Published on {classNotice.createdAt}</small>
      <br />
    </div>
  );
};

export default ClassNotice;
