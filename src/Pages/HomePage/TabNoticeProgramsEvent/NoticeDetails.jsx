import React from "react";
import { useLoaderData } from "react-router-dom";

const NoticeDetails = () => {
  const { document } = useLoaderData();
  return (
    <div className="container mx-auto my-10 mockup-window border bg-base-300">
      <div className="flex justify-center bg-base-200">
        {/* {document} */}
        <iframe
          width="100%"
          height="800"
          src="https://www.docdroid.net/e4nT0YK/output-pdf"
          frameborder="0"
          allowtransparency
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default NoticeDetails;
