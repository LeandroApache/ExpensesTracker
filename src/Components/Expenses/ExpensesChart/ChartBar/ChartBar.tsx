import React from "react";
import './ChartBar.css';

export type chartBarPropsType = {
  value: number
  label: string
  maxValue: number
}

export function ChartBar(props: chartBarPropsType) {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = props.value / props.maxValue * 100 + "%";
  }
  return (
    <div className={'chart-bar'}>
      <div className={'chart-bar__inner'}>
        <div className={'chart-bar__fill'} style={{height: barFillHeight}}></div>
      </div>
      <div className={'chart-bar__label'}>{props.label}</div>
    </div>
  )
}
