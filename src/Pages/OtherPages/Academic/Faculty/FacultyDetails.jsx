import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FacultyDetails = () => {
  const {
    name,
    img,
    position,
    department,
    facultyCode,
    office,
    email,
    education,
    publication,
    awards,
    conferences,
  } = useLoaderData();
  return (
    <div className="bg-slate-100">
      <div className="flex justify-center items-center mx-5">
        <div className="my-20">
          <div className="relative border-b-4 border-green-600 rounded-md bg-white md:flex">
            <div className="flex justify-center items-center lg:absolute -left-32 top-14">
              <img
                src={img}
                alt="img not found!"
                className="rounded-sm w-[200px] h-[200px] shadow-2xl"
              />
            </div>
            <div className="mx-5 lg:mx-24 py-8 font-serif">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-gray-700 font-bold mt-2">{position}</p>
              <p className="text-gray-700">Department of {department}</p>
              <p className="text-gray-700 ">
                Faculty Code: <span className="font-bold">{facultyCode}</span>
              </p>
              <p className="text-gray-700 mt-2">Office: {office}</p>
              <Link className="text-gray-700">
                Email: <span className="btn-link">{email}</span>
              </Link>
              <p className="text-gray-700 mt-2 font-bold">
                Publication Profile:
              </p>
              <Link className="btn-link mr-3">Google Scholar</Link>
              <Link className="btn-link">Research Gate</Link>
            </div>
          </div>

          {education && education.length > 0 && (
            <div className="py-8">
              <h2 className="text-2xl font-bold">Education</h2>
              <div className=" border-b-2 border-green-600 w-20"></div>
              <div className=" grid grid-cols-1 gap-5 mt-5">
                {education?.map((edu, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 shadow-xl font-serif border-l-4 border-green-600"
                  >
                    <div className="card-body lg:w-[500px]">
                      <h2 className="card-title">{edu?.digree}</h2>
                      <p>{edu?.university}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {education && education.length > 0 && (
            <div className="py-8">
              <h2 className="text-2xl font-bold">TEACHING EXPERIENCES</h2>
              <div className=" border-b-2 border-green-600 w-20"></div>
              <div className=" grid grid-cols-1 gap-5 mt-5">
                {education?.map((edu, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 shadow-xl font-serif border-l-4 border-green-600"
                  >
                    <div className="card-body lg:w-[500px]">
                      <h2 className="card-title">{edu?.digree}</h2>
                      <p>{edu?.university}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {publication && publication.length > 0 && (
            <div className="py-8">
              <h2 className="text-2xl font-bold">PUBLICATIONS</h2>
              <div className=" border-b-2 border-green-600 w-20"></div>
              <div className=" grid grid-cols-1 gap-5 mt-5">
                {publication?.map((edu, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 shadow-xl font-serif border-l-4 border-green-600"
                  >
                    <div className="card-body max-w-[800px]">
                      <p className="">{edu?.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {awards && awards.length > 0 && (
            <div className="py-8">
              <h2 className="text-2xl font-bold">AWARDS</h2>
              <div className=" border-b-2 border-green-600 w-20"></div>
              <div className=" grid grid-cols-1 gap-5 mt-5">
                {awards?.map((edu, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 shadow-xl font-serif border-l-4 border-green-600"
                  >
                    <div className="card-body max-w-[800px]">
                      <p className="">{edu?.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {conferences && conferences.length > 0 && (
            <div className="py-8">
              <h2 className="text-2xl font-bold">CONFERENCES</h2>
              <div className=" border-b-2 border-green-600 w-20"></div>
              <div className=" grid grid-cols-1 gap-5 mt-5">
                {conferences?.map((edu, i) => (
                  <div
                    key={i}
                    className="card bg-base-100 shadow-xl font-serif border-l-4 border-green-600"
                  >
                    <div className="card-body max-w-[800px]">
                      <p className="">{edu?.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* <div className="py-8 max-w-[800px]">
            <h2 className="text-2xl font-serif text-slate-600 font-bold bg-slate-200 p-2">
              PUBLICATIONS
            </h2>
            <div>
              {publication?.map((pub, i) => (
                <div key={i} className="font-serif">
                  <p className="border p-2 bg-white">{pub?.info}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;
