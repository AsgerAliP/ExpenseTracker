import React, { useRef } from "react";


const ExpenseForm = ({ addExpense, setDisplayForm }) => {
  const title = useRef();
  const amount = useRef();
  const date = useRef();
  

  ///event object use to information about the event.
  //preventDefault use to essential for creating smooth, interactive forms.
  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: title.current.value,
      amount: amount.current.value,
      date: date.current.value,
    };

    addExpense(data);


  };

  const cancelHandler = (e) => {
    e.preventDefault();
    setDisplayForm(false);
  };

  return (
    <div className="bg-primary w-[750px] mt-10 rounded-2xl p-4 mb-6">
      <form onSubmit={submitHandler}>
        <div className="inline-block">
          <label className="block font-bold mb-1">Title</label>
          <input
            type="text"
            className="rounded-md px-2 py-1 w-[270px]"
            ref={title}
            required
          />
        </div>
        <div className="inline-block pl-4">
          <label className="block font-bold mb-1">Amount</label>
          <input
            type="number"
            className="rounded-md px-2 py-1 w-[270px]"
            ref={amount}
            required
          />
        </div>
        <label className="block font-bold mb-1 mt-4">Date</label>
        <input
          type="date"
          className="rounded-md px-2 py-1 w-[270px]"
          ref={date}
          //1-Sat Nov 09 2024 14:23:00 GMT+0000 (UTC).
          //2-2024-11-09T14:23:00.000Z.
          //3-["2024-11-09", "14:23:00.000Z"].
          //4-[0]-"2024-11-09".
          max={new Date().toISOString().split("T")[0]}
          required
        />
        <div className="flex justify-end text-white mt-4">
          <button
            onClick={cancelHandler}
            className="bg-button px-6 py-3 rounded-xl mr-4 hover:bg-hover"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-button px-6 py-3 rounded-xl hover:bg-hover"
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
