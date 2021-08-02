import React from "react";
import {ExpenseItem} from "./ExpenseItem/ExpenseItem";
import {expensesType} from "../../../App";

export type expensesListPropsType = {
  expenses: Array<expensesType>
}

export function ExpensesList(props: expensesListPropsType) {
  if (props.expenses.length === 0) {
    return <h2 className={"expenses-list__fallback"}>No expenses found</h2>
  }

  return (
    <div className={'expenses-list'}>
      {props.expenses.map(ex => <ExpenseItem key={ex.id} id={ex.id} title={ex.title} date={ex.date}
                                             price={ex.amount}/>)}
    </div>
  )
}
