import React from "react";
import { Link } from "react-router-dom";

const ExpenseList = ({ id, title, amount, date }) => {
  const PasedDate = new Date(date);
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayDate = PasedDate.getDate();
  const month = monthName[PasedDate.getMonth()];
  const year = PasedDate.getFullYear();

  return (
    <Link to={`/expense/${id}`} className="block">
    <div className="bg-list flex h-[100px] rounded-xl m-5 p-2 text-white" >
      <div className="bg-result w-[90px] border-2 rounded-xl">
        <div className="grid place-items-center p-1">
          <p className="text-sm font-bold">{month}</p>
          <p className="text-sm">{year}</p>
          <p className="text-2xl font-bold">{dayDate}</p>
        </div>
      </div>
      <div className="content-center ms-4 text-2xl font-bold">
        <p>{title}</p>
      </div>
      <div className="content-center ms-auto">
        <p className="bg-button border-2 rounded-xl p-3 text-white font-bold">
          {amount}
        </p>
      </div>
      </div>
      </Link>
  );
};

export default ExpenseList;
