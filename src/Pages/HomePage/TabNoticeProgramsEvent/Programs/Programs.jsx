import React, { useEffect, useState } from "react";

const Programs = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/department")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  return (
    <div className="my-5 grid grid-cols-2 gap-5">
      {departments.map((department) => (
        <div
          key={department._id}
          department={department}
          className="card bg-base-100 shadow-xl image-full"
        >
          <figure>
            <img src={department.img} alt="img not found!" />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title">{department.department}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
