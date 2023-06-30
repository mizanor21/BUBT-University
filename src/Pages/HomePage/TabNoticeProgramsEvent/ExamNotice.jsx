import React from "react";
import { Link } from "react-router-dom";

const ExamNotice = ({ examNotice }) => {
  return (
    <div className="border border-b-2 p-2">
      <Link
        className="text-lg font-bold"
        to={`/notice-details/${examNotice._id}`}
      >
        {examNotice.title}
      </Link>
      <br />
      <small>Published on {examNotice.createdAt}</small>
    </div>
  );
};

export default ExamNotice;