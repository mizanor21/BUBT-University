import React from "react";
import videoIcon from "../../../assets/icons/icon-play.png";
import bubtVideo from "../../../assets/videos/bubt.mp4";
// import "./VideoInfo.css";
import { Link } from "react-router-dom";

const VideoInfo = () => {
  return (
    <div className="">
      {/* <div className="overlay top-[1930px] md:top-[1995px] lg:top-[1453px]"></div> */}
      <video
        autoPlay
        loop
        muted
        className="w-[100%] h-[800px] object-cover bg-black bg-opacity-50"
      >
        <source src={bubtVideo} type="video/mp4" />
        <source src={bubtVideo} type="video/ogg" />
      </video>
      <div className="absolute w-[100%] h-[100%] flex flex-col top-[1500px] md:top-[1900px] lg:top-[1340px] justify-center items-center text-white text-center">
        <Link to={"/bubt-video"} className="py-5 px-10 mt-2">
          <img src={videoIcon} alt="" />
        </Link>
        <h2 className="text-3xl lg:text-5xl font-serif font-bold">
          Video Tour in BUBT
        </h2>
      </div>
    </div>
  );
};

export default VideoInfo;
