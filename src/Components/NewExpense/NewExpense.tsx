import React, {useState} from "react";
import './NewExpense.css';
import {expenseDataType, NewExpenseForm} from "./NewExpenseForm/NewExpenseForm";
import {expensesType} from "../../App";
import {v4} from "uuid";
import {Card} from "../UI/Card";

export type newExpensePropsType = {
  onAddExpense: (newExpense: expensesType) => void
}

export function NewExpense(props: newExpensePropsType) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const saveExpenseDataHandler = (expenseData: expenseDataType) => {
    const newExpense = {
      ...expenseData,
      id: v4()
    }
    props.onAddExpense(newExpense);
  }
  const showFormHandler = () => {
    setIsCollapsed(false);
  }
  const hideFormHandler = () => {
    setIsCollapsed(true);
  }
  return (
    <Card className={'new-expense'}>
        {!isCollapsed && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler}/>}
        {isCollapsed && <button onClick={showFormHandler}>Add new expense</button>}
    </Card>
  )
}
