import React, {ChangeEvent} from "react";
import './ExpensesFilter.css';

export type expensesFilterPropsType = {
  filterValue: string
  onChangeFilter: (newFilterValue: string) => void
}

export function ExpensesFilter(props: expensesFilterPropsType) {

  const changeFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className={"expenses-filter"}>
      <div className={"expenses-filter__control"}>
        <label htmlFor="years">Filter by years</label>
        <select name="years" id="years" value={props.filterValue} onChange={changeFilterHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  )
}
