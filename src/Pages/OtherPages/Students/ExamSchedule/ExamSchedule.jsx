import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ExamSchedule = () => {
  const [examSchedule, setExamSchedule] = useState([]);

  useEffect(() => {
    fetch("https://bubt-university-server-mizanor21.vercel.app/exam-schedule")
      .then((res) => res.json())
      .then((data) => setExamSchedule(data));
  }, []);
  return (
    <div className="flex justify-center my-10">
      <div className="grid grid-cols-1 gap-5 font-serif md:w-[70%] lg:w-[50%]">
        <div className="collapse collapse-plus bg-slate-100">
          <input type="radio" name="my-accordion-3 " checked="checked" />
          <div className="collapse-title text-xl font-medium">
            EXAM SCHEDULE
          </div>
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-5">
              <div className="collapse collapse-plus bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  MID TERM
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr className="bg-slate-300">
                          <th>Program</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examSchedule.map((schedule) => {
                          if (schedule?.category === "MID") {
                            return (
                              <tr
                                key={schedule._id}
                                schedule={schedule}
                                className="hover"
                              >
                                <td>{schedule.program}</td>
                                <td>
                                  <Link
                                    to={schedule._id}
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
                <div className="collapse-title text-xl font-medium">FINAL</div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table bg-slate-50">
                      {/* head */}
                      <thead>
                        <tr className="bg-slate-300">
                          <th>Program</th>
                          <th>View & Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examSchedule.map((schedule) => {
                          if (schedule?.category === "FINAL") {
                            return (
                              <tr
                                key={schedule._id}
                                schedule={schedule}
                                className="hover"
                              >
                                <td>{schedule.program}</td>
                                <td>
                                  <Link
                                    to={schedule._id}
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

export default ExamSchedule;
