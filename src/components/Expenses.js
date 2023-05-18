import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from  './ExpensesFilter';

import './Expenses.css';
import Card from "./card";
const  Expenses=(props)=> { 
  const [filteredyear,setFilteredyear] = useState('2020');
  const filterChangeHandler=selectedyear=>{
    setFilteredyear(selectedyear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem title={props.items[0].title}amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title}amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title}amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title}amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem>
    </Card>
  );
}

export default Expenses;