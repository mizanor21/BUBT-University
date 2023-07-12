import React from "react";
import image1 from "../../../../src/assets/images/convocation.jpeg";

const RoverScout = () => {
  return (
    <>
      <div className="relative">
        <img src={image1} alt="Banner" className="object-cover w-full h-64" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 bg-gray-900">
          <h1 className="text-white text-4xl font-bold">Rover Scout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Objective of the Scout Movement
        </h2>
        <p className="text-gray-700 mb-4">
          The objective of the Scout movement is to contribute to the
          development of young people in achieving their full physical,
          intellectual, social, and spiritual potentials as individuals,
          responsible citizens, and members of their local, national, and
          international communities.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Principles of the Scout Movement
        </h2>
        <p className="text-gray-700 mb-4">
          The Scout movement is based on three broad principles: Duty to God,
          Duty to others, and Duty to self.
        </p>

        <h2 className="text-2xl font-bold mb-4">Scout Method</h2>
        <p className="text-gray-700 mb-4">
          The Scout method is defined as a system of progressive self-education
          through the Promise and law, Learning by doing, Membership of small
          groups, and Progressive and stimulating programs.
        </p>

        <h2 className="text-2xl font-bold mb-4">Fundamentals of Scouting</h2>
        <p className="text-gray-700 mb-4">
          Scouting is a voluntary non-political educational movement for young
          people, open to all without distinction of origin, race, or creed in
          accordance with the purpose, principles, and method conceived by the
          founder Lord Baden Powell.
        </p>

        <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
        <p className="text-gray-700 mb-4">
          The mission of world Scouting is to contribute to the education of
          young people through a value system based on the Scout promise and
          law, to help build a better world where people are self-fulfilled as
          individuals and play a constructive role in society.
        </p>

        <h2 className="text-2xl font-bold mb-4">Scout Promise</h2>
        <p className="text-gray-700 mb-4">
          On my honour I promise that I will do my best
          <br />
          <br />
          To do my duty to God and my country
          <br />
          To help other people at all times
          <br />
          To obey the Scout law.
        </p>

        <h2 className="text-2xl font-bold mb-4">Scout Law</h2>
        <ul className="list-disc pl-8 mb-4">
          <li className="text-gray-700">A Scout's honour is to be trusted</li>
          <li className="text-gray-700">A Scout is a friend to all</li>
          <li className="text-gray-700">A Scout is courteous and obedient</li>
          <li className="text-gray-700">A Scout is kind to animals</li>
          <li className="text-gray-700">A Scout is cheerful at all times</li>
          <li className="text-gray-700">A Scout is thrifty</li>
          <li className="text-gray-700">
            A Scout is clean in thought, word, and deed
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Motto</h2>
        <p className="text-gray-700 mb-4">
          Cub Scout Motto: Do your best ("যথা সাধ্য চেষ্টা করা")
          <br />
          Scout Motto: Be prepared ("সদা প্রস্তুত")
          <br />
          Rover Scout Motto: Service ("সেবা")
        </p>
      </div>
    </>
  );
};

export default RoverScout;
