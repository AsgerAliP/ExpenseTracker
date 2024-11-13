import React from "react";
import { useParams } from "react-router-dom";

const ExpenseDetails = ({ expenses }) => {
  const { id } = useParams();
  const dayDate = expenses.map((expense) => {
    if (expense.id == id) {
      const date = new Date(expense.date);

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return daysOfWeek[date.getDay()];
    }
  });
  const expense = expenses.find((exp) => exp.id === id);

  return (
    <div className="bg-primary grid  w-[450px] mt-10 rounded-2xl py-7 text-white mb-6 p-6">
      <div>
        <h2 className="flex justify-center items-center text-4xl mb-5 underline font-bold">
          {expense.title}
        </h2>
        <div className="text-lg text-black font-bold">
          <p>
            Expense Id: <span className="font-normal">{expense.id}</span>
          </p>
          <p>
            Amount: <span className="font-normal">{expense.amount}</span>
          </p>
          <p>
            Date: <span className="font-normal">{expense.date}</span>
          </p>
          <p>
            Day: <span className="font-normal">{dayDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
