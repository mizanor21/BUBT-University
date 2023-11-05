import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Alumni = () => {
  const [alumnis, setAlumnis] = useState([]);
  useEffect(() => {
    fetch("https://bubt-university-server-mizanor21.vercel.app/alumni")
      .then((res) => res.json())
      .then((data) => setAlumnis(data));
  }, []);
  return (
    <div className="my-10 py-5">
      <div className="hidden md:block">
        <h1 className="text-center text-4xl font-serif font-bold mb-10">
          Distinguished Guests and Alumni
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            {alumnis.map((alumni) => (
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
        <div className=" flex justify-center items-center mt-5">
          <Link
            to={"/all-stories"}
            className="btn mt-3 text-white bg-blue-600 border-none hover:bg-green-600"
          >
            All Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
