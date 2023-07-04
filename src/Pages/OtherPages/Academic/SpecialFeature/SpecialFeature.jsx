import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const SpecialFeature = () => {
  return (
    <>
      {/* => Banner For Special Features */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Special Features</h1>
        </div>
      </div>
      <div className=" my-8 mx-auto max-w-2xl text-justify">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Campus</h3>
          <p className="text-gray-700">
            Well illuminated campuses. Fully air-conditioned classrooms with
            multimedia facilities. Rich library with the latest textbooks,
            references &amp; journals. Modern Computer &amp; Electronic Labs.
            Well-equipped Machine Labs and Workshops for EEE and Textile
            students. Free internet, e-mail, and Wi-Fi facilities. English
            language lab equipped with modern audiovisual tools. Hostel
            facilities for male &amp; female students. Cafeteria-food at
            subsidized prices. Well-equipped students' common rooms.
            Non-political and non-smoking environment. Safe and well-protected
            campuses.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Academic</h3>
          <p className="text-gray-700">
            Weekend and evening classes for MBA, EMBA, MBM, LLB, LLM, MA in ELT,
            MA in English, M. Sc. in Mathematics, and M. Sc. in Economics.
            Medium of instruction and evaluation is English. International
            standard curriculum. Credit transfer facility. Highly qualified and
            experienced faculty members. Regular cultural activities, sports and
            games, seminars, symposiums, job fairs, entrepreneurship fairs,
            picnics, study tours, excursions, etc. Special treatment for female
            students. Student counseling.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Stipend &amp; Scholarship</h3>
          <p className="text-gray-700">
            Most competitive and affordable tuition fee for a world-class
            education. Attractive scholarship and stipend scheme for meritorious
            and poor students. 25% - 100% tuition fee waiver based on GPA of the
            SSC and the HSC results. Special fee waiver based on semester
            results. Special fee waiver for sons/daughters of Freedom Fighters.
            Fee waiver for siblings and spouses (25% each). Tuition and other
            fees can be paid on an installment basis.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpecialFeature;
