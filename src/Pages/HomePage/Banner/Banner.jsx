import React from "react";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import slider5 from "../../../assets/images/slider5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[250px] md:h-[600px] lg:h-[700px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h3 className="text-lg md:text-2xl font-serif">
            The Best University Of The State
          </h3>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-serif font-bold">
            Kingstar University
          </h1>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-24 left-[50%] md:top-1/2 md:left-[60%] md:transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h3 className="text-lg md:text-2xl font-serif mb-3">
            Be a part of our history
          </h3>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold bg-green-700 px-5 py-3 mb-3">
            Kingstar University
          </h1>
          <p className="font-serif pb-5 hidden md:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            reiciendis nobis corporis repudiandae veniam. Quis, tempore maxime?
            Cumque aliquid corporis minima illo, sapiente omnis odio distinctio,
            corrupti laboriosam vel commodi deserunt veritatis pariatur dolorum,
            impedit eligendi voluptatum numquam recusandae officiis?
          </p>
          <p className="w-1/3 border-b-8 border-green-700"></p>
          <span className="border-b-4"></span>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-9xl font-serif font-bold">Slide 3</h1>
          <p>Text for slide 3</p>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slider4} className="w-full" alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-9xl font-serif font-bold">Slide 4</h1>
          <p>Text for slide 4</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
