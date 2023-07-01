import React from "react";
import { Link } from "react-router-dom";

const ExamNotice = ({ examNotice }) => {
  return (
    <div className="border p-2">
      <Link
        className="text-lg font-bold"
        to={`/notice-details/${examNotice._id}`}
      >
        {examNotice.title}
      </Link>
      <br />
      <small className="text-slate-500">
        Published on {examNotice.createdAt}
      </small>
    </div>
  );
};

export default ExamNotice;
