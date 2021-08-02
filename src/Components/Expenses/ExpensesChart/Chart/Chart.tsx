import React from "react";
import './Chart.css';
import {dataPointsType} from "../ExpensesChart";
import {ChartBar} from "../ChartBar/ChartBar";

export type chartPropsType = {
  chartDataPoints: Array<dataPointsType>
}

export function Chart(props: chartPropsType) {
  let amountsArray = props.chartDataPoints.map(el=>el.amount);
  let maxAmount = Math.max(...amountsArray);
  return (
    <div className={'chart'}>
      {
        props.chartDataPoints.map(el => <ChartBar
          key={el.label}
          value={el.amount}
          maxValue={maxAmount}
          label={el.label}/>)
      }
    </div>
  )
}
