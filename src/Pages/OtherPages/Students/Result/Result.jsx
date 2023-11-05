import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Result = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://bubt-university-server-mizanor21.vercel.app/result")
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 gap-5 font-serif md:w-[70%] lg:w-[50%]">
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium ">Result</div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-5">
              <div className="collapse collapse-plus bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day Programs
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr className="bg-slate-300">
                          <th>SL</th>
                          <th>Program</th>
                          <th>Intake</th>
                          <th>Section</th>
                          <th>Semester</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((result, i) => (
                          <tr
                            key={result._id}
                            result={result}
                            className="hover"
                          >
                            <th>{i + 1}</th>
                            <td>{result.program}</td>
                            <td>{result.intake}</td>
                            <td>{result.section}</td>
                            <td>{result.semester}</td>
                            <td>
                              <Link
                                to={result._id}
                                className="btn btn-xs text-white bg-blue-600 border-none hover:bg-green-600"
                              >
                                view
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-plus bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Evening Programs
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>Program</th>
                          <th>Intake</th>
                          <th>Section</th>
                          <th>Semester</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((result, i) => (
                          <tr
                            key={result._id}
                            result={result}
                            className="hover"
                          >
                            <th>{i + 1}</th>
                            <td>{result.program}</td>
                            <td>{result.intake}</td>
                            <td>{result.section}</td>
                            <td>{result.semester}</td>
                            <td>
                              <Link
                                to={result._id}
                                className="btn btn-xs text-white bg-blue-600 border-none hover:bg-green-600"
                              >
                                view
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
