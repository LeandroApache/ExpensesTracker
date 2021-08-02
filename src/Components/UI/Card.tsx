import React from "react";
import './Card.css';

export type cardPropsType = {
  className: string
  children: React.ReactNode
}

export function Card(props: cardPropsType) {
  let classes = 'card ' + props.className
  return(
    <div className={classes}>{props.children}</div>
  )
}