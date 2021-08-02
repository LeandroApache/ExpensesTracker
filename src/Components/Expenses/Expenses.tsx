import React, {useState} from "react";
import {ExpensesList} from "./ExpensesList/ExpensesList";
import {expensesType} from "../../App";
import {ExpensesFilter} from "./ExpensesFilter/ExpensesFilter";
import {ExpensesChart} from "./ExpensesChart/ExpensesChart";

export type expensesPropsType = {
  expenses: Array<expensesType>
}

export function Expenses(props: expensesPropsType) {
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (newFilterValue: string) => {
    setFilteredYear(newFilterValue);
  }

  let filteredExpenses: Array<expensesType> = props.expenses.filter(ex => ex.date.getFullYear().toString() === filteredYear);

  return (
    <div className={"expenses"}>
      <ExpensesFilter filterValue={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </div>
  )
}
