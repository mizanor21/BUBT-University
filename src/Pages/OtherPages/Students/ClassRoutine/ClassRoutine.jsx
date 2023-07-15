import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClassRoutine = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("https://bubt-university-server-mizanor21.vercel.app/class-routine")
      .then((res) => res.json())
      .then((data) => setRoutines(data));
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 gap-5 font-serif md:w-[70%] lg:w-[50%]">
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium ">
            CLASS ROUTINE
          </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-5">
              <div className="collapse collapse-plus bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  BI-SEMESTER
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr className="bg-slate-300">
                          <th>SL</th>
                          <th>Program</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {routines.map((routine, i) => {
                          if (routine?.category === "BI") {
                            return (
                              <tr
                                key={routine._id}
                                routine={routine}
                                className="hover"
                              >
                                <th>{i + 1}</th>
                                <td>{routine.program}</td>
                                <td>
                                  <Link
                                    to={routine._id}
                                    className="btn btn-xs text-white bg-blue-600 border-none hover:bg-green-600"
                                  >
                                    view
                                  </Link>
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-plus bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  BI-SEMESTER (TRI-BI)
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>Program</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {routines.map((routine, i) => {
                          if (routine?.category === "TRI-BI") {
                            return (
                              <tr
                                key={routine._id}
                                routine={routine}
                                className="hover"
                              >
                                <th>{i + 1}</th>
                                <td>{routine.program}</td>
                                <td>
                                  <Link
                                    to={routine._id}
                                    className="btn btn-xs text-white bg-blue-600 border-none hover:bg-green-600"
                                  >
                                    view
                                  </Link>
                                </td>
                              </tr>
                            );
                          }
                        })}
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

export default ClassRoutine;
