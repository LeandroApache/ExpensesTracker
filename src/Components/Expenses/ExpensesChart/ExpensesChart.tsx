import React from "react";
import './ExpensesChart.css';
import {Chart} from "./Chart/Chart";
import {expensesType} from "../../../App";

export type expensesChartPropsType = {
  expenses:Array<expensesType>
}

export type dataPointsType = {
  label: string
  amount: number
}

export function ExpensesChart(props: expensesChartPropsType) {
  const chartDataPoints: Array<dataPointsType> = [
    {label: "Jan", amount: 0},
    {label: "Feb", amount: 0},
    {label: "Mar", amount: 0},
    {label: "Apr", amount: 0},
    {label: "May", amount: 0},
    {label: "Jun", amount: 0},
    {label: "Jul", amount: 0},
    {label: "Aug", amount: 0},
    {label: "Sep", amount: 0},
    {label: "Oct", amount: 0},
    {label: "Nov", amount: 0},
    {label: "Dec", amount: 0},
  ]

  for (let expense of props.expenses) {
    let monthIndex = expense.date.getMonth();
    chartDataPoints[monthIndex].amount += expense.amount;
  }

  return (
    <Chart chartDataPoints={chartDataPoints}/>
  )
}
