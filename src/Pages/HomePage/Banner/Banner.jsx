import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slide3.jpeg";
import slider4 from "../../../assets/images/slide4.jpeg";

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
          <p className="text-xl">The Best University Of Bangladesh</p>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider2} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            BUBT
          </h1>
          <p className="text-lg md:text-xl">
            Be a part of our learning culture
          </p>
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider4} className="w-full h-full object-cover" alt="" />
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            Slide 3
          </h1>
          <p className="text-xl">Text for slide 3</p>
        </div> */}
      </div>
      <div className="relative w-full h-[250px] md:h-[600px] lg:h-[700px]">
        <img src={slider3} className="w-full h-full object-cover" alt="" />
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-4">
            Slide 4
          </h1>
          <p className="text-xl">Text for slide 4</p>
        </div> */}
      </div>
    </Carousel>
  );
};

export default Banner;
