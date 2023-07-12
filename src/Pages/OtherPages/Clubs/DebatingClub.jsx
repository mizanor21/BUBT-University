import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const DebatingClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Debating Club</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Mission</h2>
        <p className="text-gray-700 mb-4">
          The mission of the Debating Club of BUBT is to establish its name as a
          leading force in the debating arena, both nationally and
          internationally. As a club, we aim to instill crucial values necessary
          for the holistic development of individuals, families, societies,
          countries, and humanity as a whole among the participating students.
        </p>

        <h2 className="text-2xl font-bold mb-4">Objective</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-gray-700">
            Educating debaters on the fundamental principles of presenting
            arguments.
          </li>
          <li className="text-gray-700">
            Enhancing debaters' language proficiency in argumentation.
          </li>
          <li className="text-gray-700">
            Promoting awareness of the authenticity and credibility of
            information sources.
          </li>
          <li className="text-gray-700">
            Developing debaters' skills in public speaking.
          </li>
          <li className="text-gray-700">
            Fostering active listening skills among debaters.
          </li>
          <li className="text-gray-700">
            Cultivating proper behavior and etiquette during conversations and
            discussions.
          </li>
          <li className="text-gray-700">
            Empowering debaters to independently organize events and collaborate
            effectively as a team.
          </li>
          <li className="text-gray-700">
            Preparing debaters for future employment opportunities by boosting
            their confidence and knowledge level.
          </li>
          <li className="text-gray-700">
            Instilling a sense of civic responsibility and understanding among
            debaters.
          </li>
          <li className="text-gray-700">
            Organizing regular events, typically on a per-semester or per-year
            basis.
          </li>
          <li className="text-gray-700">
            Conducting regular debate sessions, usually twice a week, to
            facilitate skill development.
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default DebatingClub;
