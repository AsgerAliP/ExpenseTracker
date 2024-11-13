import React from "react";

const AddExpense = ({ setDisplayForm }) => {
  const AddNewExpenseHandler = () => {
    setDisplayForm(true);
  };

  return (
    <div className="bg-primary flex justify-center w-[750px] mt-10 rounded-2xl py-7 text-white mb-6">
      <button
        onClick={AddNewExpenseHandler}
        className="bg-button px-6 py-3 rounded-xl hover:bg-hover"
      >
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpense;
