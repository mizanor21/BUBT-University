import React from "react";
import { Link } from "react-router-dom";

const GeneralNotices = ({ generalNotice }) => {
  return (
    <div>
      <Link to={`/notice-details/${generalNotice._id}`}>
        {generalNotice.title}
      </Link>
      <br />
      <small>Published on {generalNotice.createdAt}</small>
      <br />
    </div>
  );
};

export default GeneralNotices;
