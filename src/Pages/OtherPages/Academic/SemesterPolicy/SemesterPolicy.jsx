import React from "react";
import image1 from "../../../../assets/images/convocation.jpeg";

const SemesterPolicy = () => {
  return (
    <>
      {/* Banner For Semester Policy */}
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Semester Policy</h1>
        </div>
      </div>

      {/* Text For semester policy */}
      <div className="my-8 mx-auto max-w-2xl text-justify">
        <h2 className="text-2xl font-bold mb-4">
          Academic Year and Semester Duration
        </h2>
        <p className="text-gray-700 ">
          BUBT follows a model of higher education consisting of semesters,
          courses, credit hours, continuous evaluation, and letter grading. The
          academic year begins from October and runs through September of the
          following year. An academic year is divided into the following three
          semesters:
        </p>
      </div>

      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="table-auto mt-4">
            {/* Head */}
            <thead>
              <tr>
                <th className="px-4 py-2"> </th>
                <th className="px-4 py-2">Semester Name</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Fall</td>
                <td className="px-4 py-2">October - January</td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Spring</td>
                <td className="px-4 py-2">February - May</td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Summer</td>
                <td className="px-4 py-2">June - September</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SemesterPolicy;
