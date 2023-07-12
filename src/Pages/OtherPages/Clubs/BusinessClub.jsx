import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const BusinessClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">BUBT Business Club</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Message from the Coordinator (Additional Chief Advisor)
        </h2>
        <p className="text-gray-700 mb-4">
          As the Additional Chief Advisor of BUBT Business Club, I am delighted
          to see all of you dedicating your best efforts to run this club
          successfully. We are well aware that this club holds a prestigious
          position within our university, and we have selected deserving
          individuals for each position with the direct supervision of our
          expert faculties to nurture our members into business experts.
        </p>
        <p className="text-gray-700 mb-4">
          BUBT Business Club embarked on its journey in 2003, and right from the
          start, it has brought a unique and refreshing approach to business and
          business networking.
        </p>
        <p className="text-gray-700 mb-4">
          We are all immensely passionate about the Business Club and take great
          pride in our achievements. However, we never remain complacent and
          consistently strive to introduce additional benefits for our members,
          as evident from our continuous efforts.
        </p>
        <p className="text-gray-700 mb-4">
          With several meetings and seminars taking place each month, there are
          ample opportunities to develop these crucial business relationships.
          We extend a warm welcome to guests as they contribute to creating a
          vibrant atmosphere during our Business Club network meetings.
        </p>
        <p className="text-gray-700 mb-4">
          I have high hopes that the club will continue to thrive for years to
          come, and I eagerly anticipate your generation of new ideas and
          concepts for the betterment of our club. I encourage you to work as a
          cohesive group and make well-informed decisions utilizing your
          expertise. Rest assured, my best wishes are always with you.
        </p>
      </div>
      ;
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Constitution</h2>
        <h3 className="text-xl font-bold mb-2">Preamble</h3>
        <p className="text-gray-700 mb-4">
          In the 21st century, business organizations seek individuals who can
          lead with precision and dynamism. The BUBT Business Club aims to
          prepare students for today's competitive business world, enabling them
          to successfully direct organizations towards greater success.
        </p>

        <h3 className="text-xl font-bold mb-2">
          Name, Mission, Objectives & Activities
        </h3>
        <h4 className="text-lg font-bold mb-2">Section 1.1: Name</h4>
        <p className="text-gray-700 mb-4">
          The name of this organization shall be the "BUBT Business Club."
        </p>

        <h4 className="text-lg font-bold mb-2">Section 1.2: Mission</h4>
        <p className="text-gray-700 mb-4">
          The mission of the BUBT Business Club is to promote the university in
          every possible way and cultivate a new generation of business leaders.
        </p>

        <h4 className="text-lg font-bold mb-2">Section 1.3: Objectives</h4>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-gray-700">Corporate affiliation</li>
          <li className="text-gray-700">Knowledge expansion</li>
          <li className="text-gray-700">Competitive skill development</li>
          <li className="text-gray-700">Training & workshop</li>
        </ul>

        <h4 className="text-lg font-bold mb-2">Section 1.4: Activities</h4>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-gray-700">
            Building corporate linkups with different national and multinational
            organizations.
          </li>
          <li className="text-gray-700">
            Creating an internship database and providing internships to those
            who require them.
          </li>
          <li className="text-gray-700">Providing job opportunities.</li>
          <li className="text-gray-700">
            Arranging seminars and inviting business executives to conduct them.
          </li>
          <li className="text-gray-700">
            Organizing competitions like business plan competitions and case
            competitions within the university to enhance students' conceptual
            skills.
          </li>
          <li className="text-gray-700">
            Assisting students in participating in business-related competitions
            organized by universities and corporations.
          </li>
          <li className="text-gray-700">
            Arranging job fairs with the participation of leading corporate
            houses of Bangladesh.
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

export default BusinessClub;
