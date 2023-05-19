import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from  './ExpenseDate';
//import Card from "./card";

function ExpenseItem(props) {
 /* const [title,setTitle]= useState(props.title);
  console.log("Expense item evaluated by react");
  
   const clickhandler = ()=>
   {
     setTitle("Updated!!");
     //const title = props.title;
     console.log(title);
   };
   const [amount,setAmount]= useState(props.amount)
   const changeAmount =()=>{
    setAmount('100');
   }*/
       return (
      <div className='expense-item'>
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description"><h2>{props.title}</h2></div>
      <div className="expense-item__price">${props.amount} </div>
     
      </div>
    );
  } 
  export default ExpenseItem;
  