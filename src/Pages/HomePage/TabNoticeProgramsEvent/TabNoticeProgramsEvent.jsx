import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GeneralNotices from "./GeneralNotices";
import ClassNotice from "./ClassNotice";
import ExamNotice from "./ExamNotice";
import Events from "./Events";
import UndergraduatePrograms from "./Programs/UnderGraduatePrograms";
import GraduatePrograms from "./Programs/GraduatePrograms";

const TabNoticeProgramsEvent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [generalNotices, setGeneralNotices] = useState([]);
  const [classNotices, setClassNotices] = useState([]);
  const [examNotices, setExamNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notice-general")
      .then((res) => res.json())
      .then((data) => setGeneralNotices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/notice-class")
      .then((res) => res.json())
      .then((data) => setClassNotices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/notice-exam")
      .then((res) => res.json())
      .then((data) => setExamNotices(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/department")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-slate-50 my-10">
      <div className="tabs block mb-10 container mx-auto">
        <div className="text-center uppercase text-5xl font-bold">
          <Link
            className={`tab tab-bordered ${
              activeTab === 2 ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Programs
          </Link>
          <Link
            className={`tab tab-bordered ${
              activeTab === 1 ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Notices
          </Link>
          <Link
            className={`tab tab-bordered ${
              activeTab === 3 ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Events
          </Link>
        </div>

        <div className="tab-content mt-5">
          {activeTab === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <h2 className="text-xl text-center font-serif text-slate-600 font-bold bg-slate-200">
                  Undergraduate
                </h2>
                <div>
                  <UndergraduatePrograms></UndergraduatePrograms>
                </div>
              </div>
              <div>
                <h2 className="text-xl text-center font-serif text-slate-600 font-bold bg-slate-200">
                  Graduate
                </h2>
                <div>
                  <GraduatePrograms></GraduatePrograms>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <h2 className="text-xl text-center font-serif text-slate-600 font-bold bg-slate-200">
                  General
                </h2>
                {generalNotices.map((generalNotice) => (
                  <GeneralNotices
                    key={generalNotice._id}
                    generalNotice={generalNotice}
                  ></GeneralNotices>
                ))}
              </div>
              <div className="">
                <h2 className="text-xl text-center font-serif text-slate-600 font-bold bg-slate-200">
                  Class Related
                </h2>
                {classNotices.map((classNotice) => (
                  <ClassNotice
                    key={classNotice._id}
                    classNotice={classNotice}
                  ></ClassNotice>
                ))}
              </div>
              <div className="">
                <h2 className="text-xl text-center font-serif text-slate-600 font-bold bg-slate-200">
                  Exam Related
                </h2>
                {examNotices.map((examNotice) => (
                  <ExamNotice
                    key={examNotice._id}
                    examNotice={examNotice}
                  ></ExamNotice>
                ))}
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.map((event) => (
                <Events key={event._id} event={event}></Events>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabNoticeProgramsEvent;
