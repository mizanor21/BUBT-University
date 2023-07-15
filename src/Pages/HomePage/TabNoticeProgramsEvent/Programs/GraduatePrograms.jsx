import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GraduatePrograms = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("https://bubt-university-server-mizanor21.vercel.app/degree-offering")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);
  return (
    <div className="container mx-auto px-4 py-4">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border-b-2 px-4 py-2">Program</th>
            <th className="border-b-2 px-4 py-2">Total Credit Hours</th>
            <th className="border-b-2 px-4 py-2">Duration</th>
            {/* Add this line */}
          </tr>
        </thead>
        <tbody>
          {programs.map((program, index) => {
            if (program.category === "graduate") {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <Link to={""} className="hover:text-green-700 font-bold">
                    <td className="border-b px-4 py-2">{program.program}</td>
                  </Link>
                  <td className="border-b px-4 py-2">{program.totalCredit}</td>
                  <td className="border-b px-4 py-2">{program.duration}</td>
                  {/* Add this line */}
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GraduatePrograms;
