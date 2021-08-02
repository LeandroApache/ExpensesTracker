import React, {useState} from "react";
import {v4} from 'uuid';
import './App.css';
import {Expenses} from "./Components/Expenses/Expenses";
import {NewExpense} from "./Components/NewExpense/NewExpense";

export type expensesType = {
  id: string
  title: string
  amount: number
  date: Date
}

export function App() {

  const [expenses, setExpenses] = useState<Array<expensesType>>([
    {id: v4(), title: "Tablet", amount: 380, date: new Date(2020, 2, 12)},
    {id: v4(), title: "Iphone", amount: 400, date: new Date(2019, 3, 22)},
    {id: v4(), title: "Book", amount: 15, date: new Date(2021, 10, 14)},
    {id: v4(), title: "IT Courses", amount: 140, date: new Date(2021, 11, 17)},
    {id: v4(), title: "Tickets on the concert", amount: 40, date: new Date(2019, 7, 7)},
    {id: v4(), title: "Headphones", amount: 60, date: new Date(2021, 4, 30)},
  ])
  console.log(typeof expenses[0].date.getFullYear())

  const addExpenseHandler = (newExpense: expensesType) => {
    setExpenses([newExpense, ...expenses]);
  }

  return (
    <div className={"App"}>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      <Expenses expenses={expenses}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}
