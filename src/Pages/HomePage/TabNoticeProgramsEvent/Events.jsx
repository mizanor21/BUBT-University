import React from "react";
import { Link } from "react-router-dom";

const Events = ({ event }) => {
  const { img, title, createdAt } = event;
  return (
    <Link to={""}>
      <div className="card glass mx-5 md:mx-0">
        <figure className="h-60">
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <small className="text-slate-500">Published On: {createdAt}</small>
        </div>
      </div>
    </Link>
  );
};

export default Events;
