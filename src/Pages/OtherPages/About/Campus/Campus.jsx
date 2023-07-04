import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";
import image2 from "../../../../assets/images/uni-image-one.jpg";
import image3 from "../../../../assets/images/uni-image-two.jpg";

const Campus = () => {
  return (
    <>
      {/* => Banner For Campus */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Campus</h1>
        </div>
      </div>

      {/* => Text For Campus */}

      <div className="container mx-auto px-4 mt-8">
        <div className="text-center">
          <span className="text-lg font-bold">
            The Permanent Campus of BUBT
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-1/2 animate-fade-in delay-100">
            <p className="text-gray-700 leading-relaxed text-justify">
              The permanent campus of BUBT is located at Rupnagar, Mirpur-2,
              Dhaka-1216 with three spacious buildings and with all facilities
              for higher education. It is surrounded by a good number of
              educational institutions in an excellent academic atmosphere. The
              campus of BUBT has excellent communication links from all parts of
              the Dhaka City as well as from outside the City by cars, buses,
              taxis, rickshaws, etc.
            </p>
          </div>
          <div className="ml-8 animate-fade-in delay-200">
            <img
              src={image2}
              alt=""
              className="w-64 h-48 object-cover mb-4 rounded-lg"
            />
            <img
              src={image3}
              alt=""
              className="w-64 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Campus;
