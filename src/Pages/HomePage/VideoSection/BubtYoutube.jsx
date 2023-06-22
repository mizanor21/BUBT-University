import React from "react";

const BubtYoutube = () => {
  return (
    <div className="min-h-screen container mx-auto">
      <iframe
        width="100%"
        height="800px"
        src="https://www.youtube.com/embed/TzXV1hvgwsQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default BubtYoutube;
