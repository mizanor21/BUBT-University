import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const BUBTSportsClub = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">BUBT Sports Club</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Message from the Executive Advisor
        </h2>
        <p className="text-gray-700 mb-4">
          There are no other things than games and sports to maintain a sound
          mind and sound health. Sports play an important role in forming our
          body as well as soul through a lot of physical exercise. For
          university students, sports are a fundamental way to refresh the mind.
        </p>

        <p className="text-gray-700 mb-4">
          BUBT Sports Club is the umbrella organization for all sports
          activities in BUBT. With a long history and tradition in sports and
          current and ex-students at the national level, we have a reputation
          for performing above expectations and playing hard to win while
          treating our opponents with much respect within the rules. Besides
          sports, BUBT Sports Club is committed to brushing up the leadership
          and organizational capabilities as well as voluntary activities of the
          students.
        </p>

        <p className="text-gray-700 mb-4">
          The advisory and executive committee consists of some energetic and
          enthusiastic individuals. The committee is committed to familiarizing
          BUBT as a leading university in the sporting sector of Bangladesh. We
          hope that our sincerity and hard work will make it possible very soon.
        </p>

        <p className="text-gray-700 font-semibold">
          Shahjahan Miah
          <br />
          Assistant Professor, Dept. of EEE
          <br />
          Bangladesh University of Business and Technology (BUBT)
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Vision and Mission</h2>
        <p className="text-gray-700 mb-4">
          BUBT Sports Club aims to provide a relevant and sustainable sports
          service to the students of BUBT. Our aim is to ensure sporting
          facilities through support and services. We believe that the
          structure, organization, and execution of BUBT Sports Club are
          primarily the responsibility of students, but BUBT provides support
          with human, financial, and dedicated resources. Though the club is
          unique in its purpose and operation, it reflects positively as a part
          of sports and BUBT as a whole.
        </p>

        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700 mb-4">
          BUBT Sports Club is an organization consisting of a bunch of young,
          energetic, and sport-minded pupils. In the past few years, BUBT Sports
          Club has been participating in several indoor and outdoor games and
          sports (both Intra and Inter university) and bringing out fame for
          BUBT through their outstanding performances. BUBT was the semifinalist
          in the DIU-ACME Inter University T20 Cricket Tournament-2017 and 9th
          UIU Inter University Table Tennis Championship.
        </p>

        <p className="text-gray-700 mb-4">
          There are many co-curricular opportunities for students here at BUBT.
          Students involved in co-curricular activities find themselves fitting
          well at BUBT. They are strongly encouraged to be involved in sports.
          BUBT Sports Club offers a wide range of sporting events, including:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Badminton</li>
          <li>Football/Futsal</li>
          <li>Basketball</li>
          <li>Table Tennis</li>
          <li>Chess</li>
          <li>Volleyball</li>
          <li>Carom</li>
          <li>Some other indoor games</li>
          <li>Cricket</li>
        </ul>
      </div>
    </>
  );
};

export default BUBTSportsClub;
