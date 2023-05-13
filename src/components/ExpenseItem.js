import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from  './ExpenseDate';
import Card from "./card";

function ExpenseItem(props) {
   const change = ()=>
   {
    console.log("changed")
   }
   const Delete = ()=>
   {
    console.log("deleted")
   }
     return (
      <Card className='expense-item'>
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description"><h2 className='expense-item h2'>{props.title}</h2></div>
      <div className="expense-item__price">${props.amount} </div>
      
      <button onClick={change}>Change the title</button>
      <button onClick={Delete}>Delete</button>
      </Card>
    );
  } 
  export default ExpenseItem;
  