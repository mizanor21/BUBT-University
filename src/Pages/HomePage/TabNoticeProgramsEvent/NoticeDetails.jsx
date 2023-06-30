import React from "react";
import { useLoaderData } from "react-router-dom";

const NoticeDetails = () => {
  const { document } = useLoaderData();
  return (
    <div className="container mx-auto my-10 mockup-window border bg-base-300">
      <div className="flex justify-center px-4 py-16 bg-base-200">
        {document}
      </div>
    </div>
  );
};

export default NoticeDetails;
