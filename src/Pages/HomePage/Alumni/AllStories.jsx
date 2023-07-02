import React from "react";
import { useLoaderData } from "react-router-dom";

const AllStories = () => {
  const allStories = useLoaderData();
  console.log(allStories);
  return (
    <div className="my-10 hidden md:block">
      <h1 className="text-center text-4xl font-serif font-bold mb-10">
        Distinguished Guests and Alumni
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {allStories.map((alumni) => (
            <iframe
              key={alumni._id}
              width="560"
              height="315"
              src={alumni.embedSrcLink}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStories;
