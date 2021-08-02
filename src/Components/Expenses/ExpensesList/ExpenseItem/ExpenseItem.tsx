import React from "react";
import './ExpenseItem.css';
import {ExpenseDate} from "./ExpenseDate/ExpenseDate";
import {Card} from "../../../UI/Card";

export type expenseItemPropsType = {
  title: string
  date: Date
  price: number
  id: string
}

export function ExpenseItem(props: expenseItemPropsType) {
  return (
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date}/>
        <h2 className={"expense-item__title"}>
          {props.title}
        </h2>
        <div className={"expense-item__price"}>
          ${props.price}
        </div>
      </Card>
  )
}
