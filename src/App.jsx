import ExpenseForm from "./component/ExpenseForm";
import AddExpense from "./component/AddExpense";
import ExpenseList from "./component/ExpenseList";
import ExpenseDetails from "./component/ExpenseDetails";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [expenses, setExpenses] = useState([]);

  //newExpense parameter use to uniqueid add the object for every expenses.
  //expenses state will update previous parameter use to update the array.
  const UpdateExpense = (newExpense) => {
    setExpenses((prev) => [
      ...prev,
      { ...newExpense, id: Date.now().toString() },
    ]);
    setDisplayForm(false);
  };

  return (
    // <>
    //   {/* //If true, it renders ExpenseForm.
    //   //If false, it renders AddExpense. */}
    //   {displayForm ? (
    //     //addExpense will come to the form data.
    //     //the form data will [UpdateExpense]  function use to add id for every expenses.
    //     //setDisplay functoion will false set on the form.
    //     <ExpenseForm addExpense={UpdateExpense} setDisplayForm={setDisplayForm} />
    //   ) : (
    //     //setDisplayForm will set true.
    //     <AddExpense setDisplayForm={setDisplayForm} />
    //   )}

    //   {/* //If true, it renders list of expense items.
    //   //If false, nothing is rendered. */}
    //   {expenses.length > 0 && (
    //     <div className="bg-result w-[750px] p-2 rounded-2xl">
    //       {expenses.map(({ id, title, amount, date }) => (
    //         <ExpenseList key={id} id={id} title={title} amount={amount} date={date} />
    //       ))}
    //     </div>
    //   )}
    // </>

    <>
      <Routes>
        <Route
          path="/"
          element=<>
            {displayForm ? (
              <ExpenseForm
                addExpense={UpdateExpense}
                setDisplayForm={setDisplayForm}
              />
            ) : (
              <AddExpense setDisplayForm={setDisplayForm} />
            )}

            {expenses.length > 0 && (
              <div className="bg-result w-[750px] p-2 rounded-2xl">
                {expenses.map(({ id, title, amount, date }) => (
                  <ExpenseList
                    key={id}
                    id={id}
                    title={title}
                    amount={amount}
                    date={date}
                  />
                ))}
              </div>
            )}
          </>
        />

        <Route
          path="/expense/:id"
          element={<ExpenseDetails expenses={expenses} />}
        />
      </Routes>
    </>
  );
}

export default App;
