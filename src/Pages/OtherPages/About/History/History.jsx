import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const History = () => {
  return (
    <>
      {/* => Banner For History */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl font-bold"> History</h1>
        </div>
      </div>
      {/* => Text/Infor For History */}

      <div className="bg-none py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">History</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Bangladesh University of Business and Technology (BUBT) was
            established under the Private University Act in the year 2003
            modelled on North American Universities, with the approval of the
            University Grants Commission (UGC) and the Ministry of Education,
            Government of Bangladesh. It was founded by Dhaka Commerce College,
            Mirpur- 2, Dhaka, and is managed by a Board of Trustees and a
            Syndicate. BUBT is one of the leading universities in the private
            sector of Bangladesh. It has been providing quality education and
            training since its very inception. At present BUBT has established
            itself as a top ranking Private University in the country, not only
            by fulfilling all of the requirements of the Private University Act,
            2010, but also by maintaining the standard of education, research
            facilities, transparent examination system, updated academic
            programs, necessary physical infrastructures, co-curricular and
            extra-curricular activities, modern facilities for the students and
            a disciplined environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default History;
