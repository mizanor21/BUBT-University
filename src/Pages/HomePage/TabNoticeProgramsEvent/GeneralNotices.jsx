import React from "react";
import { Link } from "react-router-dom";

const GeneralNotices = ({ generalNotice }) => {
  return (
    <div className="border p-2">
      <Link
        className="text-lg font-bold"
        to={`/notice-details/${generalNotice._id}`}
      >
        {generalNotice.title}
      </Link>
      <br />
      <small className="text-slate-500">
        Published on {generalNotice.createdAt}
      </small>
      <br />
    </div>
  );
};

export default GeneralNotices;
