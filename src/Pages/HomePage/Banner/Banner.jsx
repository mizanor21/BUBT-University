import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../../assets/images/slider/slider1.png";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider/slider3.png";
import slider4 from "../../../assets/images/slider/slider4.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
      transitionTime={500}
    >
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider1} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            BUBT
          </h1>
          <p className="text-xl">The Best University Of Bangladesh.</p>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider2} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            BUBT
          </h1>
          <p className="text-lg md:text-xl">
            Be a part of our learning culture.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider3} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            BUBT
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
            LIBRARY
          </h1>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider4} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            BUBT
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
            CONVOCATION
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
