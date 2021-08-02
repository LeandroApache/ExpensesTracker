import React, {ChangeEvent, FormEvent, useState} from "react";
import './NewExpenseForm.css';

export type newExpenseFormPropsType = {
  onSaveExpenseData: (expenseData: expenseDataType) => void
  onHideForm: ()=> void
}

export type expenseDataType = {
  title: string
  amount: number
  date: Date
}

export function NewExpenseForm(props: newExpenseFormPropsType) {
  const [enteredText, setEnteredText] = useState<string>("");
  const [enteredPrice, setEnteredPrice] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredText(e.currentTarget.value);
  }
  const priceChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredPrice(e.currentTarget.value);
  }
  const dataChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(e.currentTarget.value);
  }

  const saveEnteredDataHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!enteredText || !enteredPrice || !enteredDate) {
      alert("Invalid input");
    } else {
      const newExpenseData = {
        title: enteredText,
        amount: +enteredPrice,
        date: new Date(enteredDate)
      }
      props.onSaveExpenseData(newExpenseData);
      props.onHideForm();
    }
    setEnteredDate("");
    setEnteredPrice("");
    setEnteredText("");
  }

  return (
    <form onSubmit={saveEnteredDataHandler}>
      <div className={"new-expense__controls}"}>
        <div className={'new-expense__control'}>
          <label htmlFor="text">Text</label>
          <input id={'text'} type="text" onChange={titleChangeHandler} value={enteredText}/>
        </div>
        <div className={'new-expense__control'}>
          <label htmlFor="price">Price</label>
          <input id={'price'} type="number" min='0.01' step='0.01' onChange={priceChangeHandler} value={enteredPrice}/>
        </div>
        <div className={'new-expense__control'}>
          <label htmlFor="date">Date</label>
          <input id={'date'} type="date" min="2019-01-01" max="2022-12-31" onChange={dataChangeHandler}
                 value={enteredDate}/>
        </div>
      </div>
      <div className={'new-expense__actions'}>
        <button type={'button'} onClick={props.onHideForm}>Cancel</button>
        <button type={"submit"}>Add expense</button>
      </div>
    </form>
  )
}
