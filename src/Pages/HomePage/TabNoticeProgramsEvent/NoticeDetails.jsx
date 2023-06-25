import React from "react";
import { useLoaderData } from "react-router-dom";

const NoticeDetails = () => {
  const { document } = useLoaderData();
  return <div>details{document}</div>;
};

export default NoticeDetails;
