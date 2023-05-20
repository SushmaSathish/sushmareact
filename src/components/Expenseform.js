import React,{ useState } from "react";
import "./Expenseform.css";
const Expenseform = (props) => {
  const [enteredTitle,setEnteredTitle]= useState("");
  const [enteredAmount,setEnteredAmount]= useState("");
  const [enteredDate,setEnteredDate]= useState("");
 // const[userInput,setUserInput]= useState({
   // enteredTitle:' ',
   // enteredAmount:' ',
    //enteredDate:' '
 // });
  const changeTitle=(event)=>{
    setEnteredTitle(event.target.value)
   /* setUserInput({
      ...userInput,
      enteredTitle:event.target.value
    })*/
  }
  const changeAmount=(event)=>{
    setEnteredAmount(event.target.value)
   /* setUserInput({
      ...userInput,
      enteredAmount:event.target.value
    })*/
  }
  const changeDate=(event)=>{
    setEnteredDate(event.target.value)
    /*setUserInput({
      ...userInput,
      enteredDate:event.target.value
    })*/
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData ={
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  }
  return (
    <form onSubmit={submitHandler}>
      <div className=".new-expense__controls">
        <div className=".new-expense__controls">
          <label className="new-expense__control label">Title</label>
          <input type='text' value={enteredTitle} onChange={changeTitle} className="new-expense__control input"/>
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Amount</label>
          <input type= 'number' value={enteredAmount} onChange ={changeAmount}className="new-expense__control input" />
        </div>
        <div className="new-expense__controls">
          <label className="new-expense__control label">Date</label>
          <input type='date' value={enteredDate} onChange={changeDate} className="new-expense__control input"/>
        </div>
        </div>
        <div className="new-expense__actions ">
          <button type="cancel" onClick={props.onCancel}>cancel</button>
        <button type="submit" >add expense</button>
      </div>
    </form>
  );
};
export default Expenseform;