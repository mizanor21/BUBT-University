import React from "react";
import image1 from "../../../../../assets/images/convocation.jpeg";
import { useLoaderData } from "react-router-dom";

const ProgramDetails = () => {
  const { program, courseStracture, programStracture, requirement } =
    useLoaderData();
  console.log(courseStracture);

  return (
    <div>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-serif font-bold">
            {program}
          </h1>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center py-10">
        <div className=" lg:max-w-[50%] overflow-x-auto font-serif">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold mb-4">
              STRUCTURE OF THE PROGRAM
            </h1>
            {programStracture.map((stracture) => (
              <p key={stracture._id} stracture={stracture} className="mb-5">
                {stracture.structureData}
              </p>
            ))}

            <h2 className="text-2xl font-bold mt-5 mb-2">
              Admission requirements for {program}
            </h2>
            <ul className="list-disc">
              <li>
                GPA of at least 2.50 or 2nd Division in both the SSC and the HSC
                or equivalent examinations; or
              </li>
              <li>
                GPA of at least 2.00 either in the SSC or the HSC examination,
                but the total GPA in both the examinations combined must be at
                least 6.00; or
              </li>
              <li>
                'O' Level with at least 5 subjects and 'A' Level with at least 2
                subjects. In these two examinations, out of 7 (seven) subjects,
                a student must have passed 4 (four) subjects with at least B
                grade or GPA of 4.00 and in 3 (three) subjects with at least C
                grade or GPA of 3.5.
              </li>
              <li>
                North American High School Diploma or International
                Baccalaureate, or its equivalent.
              </li>
              <li>
                In case of sons/daughters of Freedom Fighters, a total GPA of at
                least 5.00 in both the SSC and the HSC Examinations. But the
                official proof of the Father/Mother as a Freedom Fighter must be
                submitted.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-5 mb-2">
              Admission Procedure
            </h2>
            <p>
              Admission form and prospectus are available in the admission
              office/reception desk. After the verification of necessary
              documents, the applicants are allowed to deposit the admission
              fees and sign the application form to complete the admission
              process.
            </p>

            <p className="mt-2 font-bold">
              The following documents are needed at the time of admission:
            </p>
            <ul className="list-disc">
              <li>
                Two passport-size color photographs (studio lab print with white
                background for ID card purpose)
              </li>
              <li>
                Photocopies of SSC/O-Level, HSC/A-Level, or equivalent
                examinations certificates and mark sheets/transcripts,
                SSC/O-Level registration card and birth certificate/national ID
                card (one copy each)
              </li>
              <li>
                Original certificates, mark sheets/transcripts, registration
                card and birth certificate/national ID card must be produced for
                verification by the officer of BUBT in charge of admission.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-5 mb-2">Course Structure</h2>
            <table className="w-full border border-gray-300 ">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border-b-2 px-4 py-2">Course Code</th>
                  <th className="border-b-2 px-4 py-2">Course Title</th>
                  <th className="border-b-2 px-4 py-2">Credit</th>
                  <th className="border-b-2 px-4 py-2">Lab Credit</th>
                  <th className="border-b-2 px-4 py-2">Total Credit</th>
                  <th className="border-b-2 px-4 py-2">Prerequisite</th>
                </tr>
              </thead>
              <tbody>
                {courseStracture.map((course, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="border-b px-4 py-2">{course?.courseCode}</td>
                    <td className="border-b px-4 py-2">
                      {course?.courseTitle}
                    </td>
                    <td className="border-b px-4 py-2">{course?.credit}</td>
                    <td className="border-b px-4 py-2">{course?.labCredit}</td>
                    <td className="border-b px-4 py-2">
                      {course?.totalCredit}
                    </td>
                    <td className="border-b px-4 py-2">
                      {course?.prerequisite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
