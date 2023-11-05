import React from "react";
import videoIcon from "../../../assets/icons/icon-play.png";
import bubtVideo from "../../../assets/videos/bubt.mp4";

const VideoInfo = () => {
  return (
    <div className="">
      {/* <div className="overlay top-[1930px] md:top-[1995px] lg:top-[1453px]"></div> */}
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          className="w-[100%] h-[300px] md:h-[500px] lg:h-[800px] object-cover bg-black bg-opacity-50"
        >
          <source src={bubtVideo} type="video/mp4" />
          <source src={bubtVideo} type="video/ogg" />
        </video>
        <div className="absolute inset-0  w-[100%] h-[100%] flex flex-col  justify-center items-center text-white text-center">
          <button onClick={() => window.my_modal_3.showModal()}>
            <img src={videoIcon} alt="" />
          </button>
          <dialog id="my_modal_3" className="modal">
            <form
              method="dialog"
              className="modal-box w-11/12 max-w-5xl h-[400px] md:h-[600px] "
            >
              <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">
                ✕
              </button>
              <iframe
                width="100%"
                height="540"
                src="https://www.youtube.com/embed/TzXV1hvgwsQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </form>
          </dialog>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold">
            Video Tour in BUBT
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
